import {Product} from '../../../shared/models/product.model';

export interface ProductState {
  products: Product[];
  selectedProductId: number | null;
  error: string | null;
  loading: boolean;
}

export const initialState: ProductState = {
  products: [],
  selectedProductId: null,
  error: null,
  loading: false
};
