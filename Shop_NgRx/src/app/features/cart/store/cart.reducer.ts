import { createReducer, on } from "@ngrx/store";
import { CartActions } from "./cart.actions";
import { CartItem } from "../../../shared/models/cart-item.model";
import {createRehydrateReducer} from '../../../core/store/utils/create-rehydrate.reducer';



export interface CartState {
  items: CartItem[] | [],
  totalQuantities: number,
  totalAmount: number,
}

export const initialState: CartState = {
  items: [],
  totalQuantities: 0,
  totalAmount: 0
}

export const cartReducer = createRehydrateReducer(
  'cart',
  initialState,
  on(CartActions.addItem, (state, product) => {
    if (state.items.length <= 0) return {
      ...state,
      items: [...state.items, { ...product, quantity: 1 }],
      totalQuantities: 1,
      totalAmount: product.price
    };

    const existingItem = state.items.find(item => item.id === product.id);

    if (!existingItem) {
      return {
        ...state,
        items: [...state.items, { ...product, quantity: 1 }],
        totalQuantities: state.totalQuantities + 1,
        totalAmount: state.totalAmount + product.price
      }
    }

    return {
      ...state,
      items: state.items.map(item => {
        if (item.id !== existingItem.id) return item;

        return {
          ...existingItem,
          quantity: existingItem?.quantity + 1
        }
      }),
      totalQuantities: state.totalQuantities + 1,
      totalAmount: state.totalAmount + product.price
    }
  }),
  on(CartActions.removeItem, (state, { id }) => {
    const existingItem = state.items.find(item => item.id === id);

    if (!existingItem) return state;

    const itemNewQuantity = existingItem.quantity - 1

    return {
      ...state,
      items: itemNewQuantity === 0 ? state.items.filter(item => item.id !== id) : state.items.map(item => {
        if (item.id !== existingItem.id) return item;

        return {
          ...existingItem,
          quantity: itemNewQuantity
        }
      }),
      totalQuantities: state.totalQuantities - 1,
      totalAmount: state.totalAmount - existingItem.price
    }
  }),
  on(CartActions.remove, (state, { id }) => {
    const existingItem = state.items.find(item => item.id === id);

    if (!existingItem) return state;

    return {
      ...state,
      items: state.items.filter(item => item.id !== id),
      totalQuantities: state.totalQuantities - existingItem.quantity,
      totalAmount: state.totalAmount - (existingItem.quantity * existingItem.price)
    }
  }),
  on(CartActions.resetCart, (state) => {
    return {
      ...state,
      items: [],
      totalQuantities: 0,
      totalAmount: 0
    }
  })
)
