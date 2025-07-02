import { Action, ActionCreator, ActionReducer, createReducer, ReducerTypes } from "@ngrx/store";

export function createRehydrateReducer<S, A extends Action = Action>(
  key: string,
  initialState: S,
  ...ons: ReducerTypes<S, ActionCreator[]>[]
): ActionReducer<S, A> {
  const item = localStorage.getItem(key);
  const newInitialState = (item && JSON.parse(item)) ?? initialState;

  const rehydratedOns = ons.map((onConfig) => {
    return {
      ...onConfig,
      reducer: ((state: S, action: any) => {
        // Ensure state is defined
        const currentState = state ?? newInitialState;
        // Call original reducer logic
        const newState = (onConfig.reducer as ActionReducer<S, any>)(currentState, action);
        // Persist to localStorage
        localStorage.setItem(key, JSON.stringify(newState));
        return newState;
      }) as ActionReducer<S, any>,
    };
  });

  return createReducer(newInitialState, ...rehydratedOns);
}
