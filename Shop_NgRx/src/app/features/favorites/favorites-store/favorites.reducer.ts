import {initialFavoritesState} from './favorites.state';
import {on} from '@ngrx/store';
import {FavoritesActions} from './favorites.actions';
import {createRehydrateReducer} from '../../../core/store/utils/create-rehydrate.reducer';

export const favoritesReducer = createRehydrateReducer(
  'favorites', // localStorage key
  initialFavoritesState,
  on(FavoritesActions.addToFavorites, (state, product) => {
    // Prevent duplicates
    const exists = state.items.some(item => item.id === product.id);
    return exists ? state : {
      ...state,
      items: [...state.items, product]
    };
  }),
  on(FavoritesActions.removeFromFavorites, (state, { id }) => ({
    ...state,
    items: state.items.filter(item => item.id !== id)
  })),
  on(FavoritesActions.clearFavorites, () => ({
    items: []
  }))
);
