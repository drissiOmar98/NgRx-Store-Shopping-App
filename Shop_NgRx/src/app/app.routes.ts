import { Routes } from '@angular/router';
import {HomeComponent} from './features/home/home.component';
import {ProductsComponent} from './features/products/products.component';
import {NotFoundComponent} from './features/not-found/not-found.component';
import {CartComponent} from './features/cart/cart.component';
import {SuccessComponent} from './features/payment/success/success.component';
import {CancelComponent} from './features/payment/cancel/cancel.component';
import {FavoritesComponent} from './features/favorites/favorites.component';

export const routes: Routes = [

  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'products',
    component: ProductsComponent
  },
  {
    path: 'cart',
    component: CartComponent
  },
  {
    path: 'favorites',
    component: FavoritesComponent
  },
  {
    path: 'payment/success',
    component: SuccessComponent
  },
  {
    path: 'payment/cancel',
    component: CancelComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  },
];
