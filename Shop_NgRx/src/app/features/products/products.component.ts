import {Component, inject, OnDestroy, OnInit, signal} from '@angular/core';
import {Heart, LucideAngularModule, ShoppingBag} from 'lucide-angular';
import {RouterLink} from '@angular/router';
import {Product} from '../../shared/models/product.model';
import {selectCart} from '../cart/store/cart.selectors';
import {Store} from '@ngrx/store';
import {ProductService} from './services/product.service';
import {ProductListComponent} from './product-list/product-list.component';
import {ProductsSkeletonComponent} from '../../shared/ui/products-skeleton/products-skeleton.component';
import {selectIsFavorite} from '../favorites/favorites-store/favorites.selectors';
import {FavoritesActions} from '../favorites/favorites-store/favorites.actions';
import {Subject, take, takeUntil} from 'rxjs';
import {selectAllProducts, selectProductLoading} from './product-store/product.selector';
import {ProductActions} from './product-store/product.action';
import {AsyncPipe} from '@angular/common';

@Component({
  selector: 'app-products',
  imports: [
    LucideAngularModule,
    RouterLink,
    ProductListComponent,
    ProductsSkeletonComponent,
    AsyncPipe
  ],
  templateUrl: './products.component.html',
  standalone: true,
  styleUrl: './products.component.scss'
})
export class ProductsComponent implements OnInit,OnDestroy{
  private store = inject(Store);

  readonly ShoppingBag = ShoppingBag;
  protected readonly Heart = Heart;


  products$ = this.store.select(selectAllProducts);
  loading$ = this.store.select(selectProductLoading);

  data = signal<Product[] | []>([]);
  isLoading = signal<boolean>(true);

  favoriteToastMessage = signal<string>('');
  cartToastShow = signal<boolean>(false);
  favoriteToastShow = signal<boolean>(false);
  timer: ReturnType<typeof setTimeout> | null = null
  private destroy$ = new Subject<void>();

  productsService = inject(ProductService);



  constructor() { }

  ngOnInit() {

    this.store.dispatch(ProductActions.loadProducts());

    // Cart toast logic
    this.store.select(selectCart).subscribe(state => {
      if (this.cartToastShow()) return;

      this.timer = setTimeout(() => {
        this.cartToastShow.set(state.totalQuantities > 0);
      });

      this.timer = setTimeout(() => {
        this.cartToastShow.set(false);
      }, 5000);
    });
  }

  toggleFavorite(product: Product) {
    this.store.select(selectIsFavorite(product.id))
      .pipe(
        take(1),
        takeUntil(this.destroy$)
      )
      .subscribe(isFavorite => {
        if (isFavorite) {
          this.store.dispatch(FavoritesActions.removeFromFavorites({ id: product.id }));
          this.favoriteToastMessage.set('Successfully removed from Favorites');
        } else {
          this.store.dispatch(FavoritesActions.addToFavorites(product));
          this.favoriteToastMessage.set('Successfully added to Favorites');
        }

        this.favoriteToastShow.set(true);
        setTimeout(() => this.favoriteToastShow.set(false), 3000);
      });
  }

  isFavorite = (productId: number) => this.store.select(selectIsFavorite(productId));

  ngAfterViewInit() {
    if (this.timer) {
      clearTimeout(this.timer);
    }
    this.timer = setTimeout(() => {
      this.cartToastShow.set(false);
    });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
    if (this.timer) {
      clearTimeout(this.timer);
    }
  }


}
