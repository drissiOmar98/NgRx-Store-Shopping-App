import {createFeatureSelector, createSelector} from '@ngrx/store';
import {FavoritesState} from './favorites.state';

export const selectFavorites = createFeatureSelector<FavoritesState>('favorites');


// Derived selectors
export const selectFavoriteItems = createSelector(
  selectFavorites,
  (state) => state.items
);

export const selectFavoritesCount = createSelector(
  selectFavoriteItems,
  (items) => items.length
);

export const selectIsFavorite = (productId: number) =>
  createSelector(
    selectFavoriteItems,
    (items) => items.some(item => item.id === productId)
  );
