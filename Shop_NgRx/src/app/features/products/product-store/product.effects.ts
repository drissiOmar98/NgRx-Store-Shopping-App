import {inject, Injectable} from "@angular/core";
import {ProductService} from '../services/product.service';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {ProductActions} from './product.action';
import {catchError, map, of, switchMap, tap} from 'rxjs';
import {Product} from '../../../shared/models/product.model';

@Injectable()
export class ProductEffects {
  private actions$ = inject(Actions);
  private productService = inject(ProductService);

  loadProducts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProductActions.loadProducts),
      switchMap(() =>
        this.productService.getProducts().pipe(
          map((products: Product[]) =>
            ProductActions.loadProductsSuccess({ products })),
          catchError(error =>
            of(ProductActions.loadProductsFailure({
              error: error.message || 'Failed to load products'
            }))
          )
        )
      )
    )
  )
}
