import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ImageLoaderComponent} from '../../../shared/ui/image-loader/image-loader.component';
import {CardComponent} from '../../../shared/ui/card/card.component';
import {Heart, LucideAngularModule, Plus} from 'lucide-angular';
import { Star, StarHalf, Star as StarEmpty } from 'lucide-angular';
import {AsyncPipe, CurrencyPipe, DecimalPipe, NgForOf, NgIf} from '@angular/common';
import {Product} from '../../../shared/models/product.model';
import {Store} from '@ngrx/store';
import {CartActions} from '../../cart/store/cart.actions';
import {RatingComponent} from '../../../shared/ui/rating/rating.component';
import {Observable} from 'rxjs';
import {FaIconComponent} from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-product',
  imports: [
    ImageLoaderComponent,
    CardComponent,
    LucideAngularModule,
    NgIf,
    CurrencyPipe,
    DecimalPipe,
    RatingComponent,
    AsyncPipe,
    FaIconComponent
  ],
  templateUrl: './product.component.html',
  standalone: true,
  styleUrl: './product.component.scss'
})
export class ProductComponent {

  protected readonly Plus = Plus;
  protected readonly Heart = Heart;

  @Input() data: Product | null = null;
  @Input() isFavorite!: Observable<boolean>;
  @Output() toggleFavorite = new EventEmitter<Product>();

  constructor(private store: Store) { }

  addToCart(item: Product) {
    if (!item) return;
    this.store.dispatch(CartActions.addItem(item));
  }

  onToggleFavorite() {
    if (this.data) {
      this.toggleFavorite.emit(this.data);
    }
  }





}
