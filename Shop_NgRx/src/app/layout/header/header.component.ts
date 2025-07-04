import {Component, inject} from '@angular/core';
import {Heart, LucideAngularModule, ShoppingBag} from 'lucide-angular';
import {Store} from '@ngrx/store';
import {RouterLink, RouterLinkActive} from '@angular/router';
import {NgIf} from '@angular/common';
import {selectCart, selectTotalQuantities, selectUniqueItemsCount} from '../../features/cart/store/cart.selectors';
import {FaIconComponent} from '@fortawesome/angular-fontawesome';
import {selectFavoritesCount} from '../../features/favorites/favorites-store/favorites.selectors';

@Component({
  selector: 'app-header',
  imports: [
    RouterLinkActive,
    RouterLink,
    LucideAngularModule
  ],
  templateUrl: './header.component.html',
  standalone: true,
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  store = inject(Store);

  protected readonly ShoppingBag = ShoppingBag;
  protected readonly Heart = Heart;

  cartTotalQuantities: number = 0
  favoritesCount: number = 0;


  constructor() {
    // Subscribe to cart quantities
    this.store.select(selectCart).subscribe(state =>
      this.cartTotalQuantities = state.totalQuantities
    );

    // Subscribe to favorites count
    this.store.select(selectFavoritesCount).subscribe(count =>
      this.favoritesCount = count
    );
  }



}
