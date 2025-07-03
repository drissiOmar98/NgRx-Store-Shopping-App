import {createFeatureSelector, createSelector} from "@ngrx/store";
import { CartState } from "./cart.reducer";

export const selectCart = createFeatureSelector<CartState>('cart')


export const selectCartItems = createSelector(
  selectCart,
  (cart) => cart.items
);

export const selectTotalQuantities = createSelector(
  selectCart,
  (cart) => cart.totalQuantities
);

export const selectTotalAmount = createSelector(
  selectCart,
  (cart) => cart.totalAmount
);

export const selectIsCartEmpty = createSelector(
  selectCartItems,
  (items) => items.length === 0
);

// Selector for getting the count of unique products in cart
export const selectUniqueItemsCount = createSelector(
  selectCartItems,
  (items) => items.length
);
