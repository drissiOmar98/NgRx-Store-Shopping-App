import {CartState} from './features/cart/store/cart.reducer';
import {FavoritesState} from './features/favorites/favorites-store/favorites.state';

/**
 * Root AppState interface describing all feature slices.
 */
export interface AppState {
  cart: CartState;
  favorites: FavoritesState;
}
