import {AppState} from './app.state';
import {ActionReducerMap} from '@ngrx/store';
import {cartReducer} from './features/cart/store/cart.reducer';
import {favoritesReducer} from './features/favorites/favorites-store/favorites.reducer';
import {productReducer} from './features/products/product-store/product.reducer';

/**
 * Root reducer map binding all feature reducers.
 */
export const appReducer: ActionReducerMap<AppState> = {
  cart: cartReducer,
  favorites: favoritesReducer,
  products: productReducer
};
