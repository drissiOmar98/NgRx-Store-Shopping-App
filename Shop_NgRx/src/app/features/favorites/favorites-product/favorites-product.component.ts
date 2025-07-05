import {Component, Input, signal} from '@angular/core';
import {CardComponent} from '../../../shared/ui/card/card.component';
import {Heart, LucideAngularModule, Plus, ShoppingBag} from 'lucide-angular';
import {ImageLoaderComponent} from '../../../shared/ui/image-loader/image-loader.component';
import {CurrencyPipe, DecimalPipe, NgIf} from '@angular/common';
import {FavoriteItem} from '../../../shared/models/favourite-item.model';
import {Store} from '@ngrx/store';
import {FavoritesActions} from '../favorites-store/favorites.actions';
import {CartActions} from '../../cart/store/cart.actions';
import {FaIconComponent} from '@fortawesome/angular-fontawesome';
import {RatingComponent} from '../../../shared/ui/rating/rating.component';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-favorites-product',
  imports: [
    CardComponent,
    LucideAngularModule,
    ImageLoaderComponent,
    CurrencyPipe,
    FaIconComponent,
    RatingComponent,
    DecimalPipe,
    RouterLink
  ],
  templateUrl: './favorites-product.component.html',
  standalone: true,
  styleUrl: './favorites-product.component.scss'
})
export class FavoritesProductComponent {

  protected readonly Heart = Heart;
  protected readonly ShoppingBag = ShoppingBag;
  protected readonly Plus = Plus;

  // Toast control signals
  showToast = signal(false);
  toastType = signal<'cart'|'favorite'>('cart'); // Tracks which toast to show

  @Input() data: FavoriteItem | null = null;

  constructor(private store: Store) {}

  removeFromFavorites(id: number) {
    this.store.dispatch(FavoritesActions.removeFromFavorites({ id }));
    this.showDynamicToast('favorite', 'Removed from favorites');
  }

  addToCart(item: FavoriteItem) {
    this.store.dispatch(CartActions.addItem(item));
    this.showDynamicToast('cart', 'Added to cart');
  }

  private showDynamicToast(type: 'cart'|'favorite', message: string) {
    this.toastType.set(type);
    this.showToast.set(true);
    setTimeout(() => this.showToast.set(false), 3000);
  }



}
