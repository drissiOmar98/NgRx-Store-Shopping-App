import {Component, inject, signal} from '@angular/core';
import {FavoriteItem} from '../../shared/models/favourite-item.model';
import {Store} from '@ngrx/store';
import {selectFavorites} from './favorites-store/favorites.selectors';
import {CartState} from '../cart/store/cart.reducer';
import {FavoritesState} from './favorites-store/favorites.state';
import {FavoritesActions} from './favorites-store/favorites.actions';
import {FavoritesProductListComponent} from './favorites-product-list/favorites-product-list.component';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-favorites',
  imports: [
    FavoritesProductListComponent,
    RouterLink
  ],
  templateUrl: './favorites.component.html',
  standalone: true,
  styleUrl: './favorites.component.scss'
})
export class FavoritesComponent {

  store = inject(Store);

  data = signal<FavoritesState>({
    items: []
  });

  constructor() {
    this.store.select(selectFavorites).subscribe(favorites =>
      this.data.set(favorites)
    );
  }

  clearFavorites() {
    this.store.dispatch(FavoritesActions.clearFavorites());
  }

}
