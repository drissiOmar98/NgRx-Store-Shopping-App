import {AppState} from './app.state';
import {ActionReducerMap} from '@ngrx/store';
import {cartReducer} from './features/cart/store/cart.reducer';
import {favoritesReducer} from './features/favorites/favorites-store/favorites.reducer';

/**
 * Root reducer map binding all feature reducers.
 */
export const appReducer: ActionReducerMap<AppState> = {
  cart: cartReducer,
  favorites: favoritesReducer,
};
