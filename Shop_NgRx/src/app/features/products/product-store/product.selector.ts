import {createFeatureSelector, createSelector} from '@ngrx/store';
import {ProductState} from './product.state';

export const selectProductState = createFeatureSelector<ProductState>('products');

export const selectAllProducts = createSelector(
  selectProductState,
  (state) => state.products
);

export const selectProductLoading = createSelector(
  selectProductState,
  (state) => state.loading
);

export const selectProductError = createSelector(
  selectProductState,
  (state : ProductState) => state.error
);


export const selectSelectedProduct = createSelector(
  selectAllProducts,
  selectProductState,
  (products, state) => products.find(p => p.id === state.selectedProductId)
);

export const selectProductsCount = createSelector(
  selectAllProducts,
  (products) => products.length
);
