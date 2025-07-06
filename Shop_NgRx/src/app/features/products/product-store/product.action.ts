import {createActionGroup, emptyProps, props} from '@ngrx/store';
import {Product} from '../../../shared/models/product.model';

export const ProductActions = createActionGroup({
  source: 'Products',
  events: {
    // Loading actions
    'Load Products': emptyProps(),
    'Load Products Success': props<{ products: Product[] }>(),
    'Load Products Failure': props<{ error: string }>(),

    // Selection action
    'Set Selected Product': props<{ productId: number }>()
  }
});
