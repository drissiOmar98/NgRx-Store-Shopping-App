import {Component, signal} from '@angular/core';
import {RouterLink, RouterLinkActive} from '@angular/router';
import {CurrencyPipe} from '@angular/common';
import {Store} from '@ngrx/store';
import {HttpClient} from '@angular/common/http';
import {CartState} from './store/cart.reducer';
import {CartActions} from './store/cart.actions';
import {selectCart} from './store/cart.selectors';
import {CartProductListComponent} from './cart-product-list/cart-product-list.component';

@Component({
  selector: 'app-cart',
  imports: [
    RouterLink,
    RouterLinkActive,
    CurrencyPipe,
    CartProductListComponent
  ],
  templateUrl: './cart.component.html',
  standalone: true,
  styleUrl: './cart.component.scss'
})
export class CartComponent {
  data = signal<CartState>({
    items: [],
    totalQuantities: 0,
    totalAmount: 0
  });
  isLoading: boolean = false;

  constructor(private store: Store, private http: HttpClient) {
    this.store.select(selectCart).subscribe(state => this.data.set(state))
  }

  resetCart() {
    this.store.dispatch(CartActions.resetCart());
  }

  async checkout() {
    this.isLoading = true;
  }

}
