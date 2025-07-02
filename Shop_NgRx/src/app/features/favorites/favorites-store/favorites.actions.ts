import {createActionGroup, props} from '@ngrx/store';
import {Product} from '../../../shared/models/product.model';

export const FavoritesActions = createActionGroup({
  source: 'Favorites',
  events: {
    'Add To Favorites': props<Product>(),
    'Remove From Favorites': props<{ id: number }>(),
    'Clear Favorites': props<void | any>()
  }
});
