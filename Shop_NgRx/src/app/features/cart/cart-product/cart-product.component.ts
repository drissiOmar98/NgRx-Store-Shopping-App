import {Component, inject, Input} from '@angular/core';
import {CartItem} from '../../../shared/models/cart-item.model';
import {LucideAngularModule, Minus, Plus, Trash2} from 'lucide-angular';
import {ImageLoaderComponent} from '../../../shared/ui/image-loader/image-loader.component';
import {CardComponent} from '../../../shared/ui/card/card.component';
import {CurrencyPipe} from '@angular/common';
import {Store} from '@ngrx/store';
import {CartActions} from '../store/cart.actions';

@Component({
  selector: 'app-cart-product',
  imports: [LucideAngularModule, ImageLoaderComponent, CardComponent, CurrencyPipe],
  templateUrl: './cart-product.component.html',
  standalone: true,
  styleUrl: './cart-product.component.scss'
})
export class CartProductComponent {

  store = inject(Store);

  @Input() data: CartItem | null = null;
  isInWishlist = false;
  toggleWishlist() {
    this.isInWishlist = !this.isInWishlist;
    // Add your wishlist logic here
  }

  protected readonly Plus = Plus;
  protected readonly Minus = Minus;
  protected readonly Trash2 = Trash2;

  constructor() { }

  addToCart(item: CartItem) {
    this.store.dispatch(CartActions.addItem(item));
  }

  removeCartItem(id: number) {
    this.store.dispatch(CartActions.removeItem({ id }));
  }

  remove(id: number) {
    this.store.dispatch(CartActions.remove({ id }));
  }


}
