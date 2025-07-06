import {createReducer, on} from '@ngrx/store';
import {initialState} from './product.state';
import {ProductActions} from './product.action';

export const productReducer = createReducer(
  initialState,
  on(ProductActions.loadProducts, (state) => ({
    ...state,
    loading: true,
    error : null
  })),
  on(ProductActions.loadProductsSuccess, (state, { products }) => ({
    ...state,
    products,
    error: null,
    loading: false
  })),
  on(ProductActions.loadProductsFailure, (state, { error }) => ({
    ...state,
    error,
    loading: false
  })),
  on(ProductActions.setSelectedProduct, (state, { productId }) => ({
    ...state,
    selectedProductId: productId
  }))
);
