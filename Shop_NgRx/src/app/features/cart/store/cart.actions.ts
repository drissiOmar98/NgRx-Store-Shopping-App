import { createActionGroup, props } from "@ngrx/store";
import { Product } from "../../../shared/models/product.model";

export const CartActions = createActionGroup({
  source: 'Cart',
  events: {
    'Add Item': props<Product>(),
    'Remove Item': props<{ id: number }>(),
    'Remove': props<{ id: number }>(),
    'Reset Cart': props<void | any>()
  }
})
