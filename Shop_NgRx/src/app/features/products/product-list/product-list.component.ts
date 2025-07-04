import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Product} from '../../../shared/models/product.model';
import {ProductComponent} from '../product/product.component';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-product-list',
  imports: [
    ProductComponent
  ],
  templateUrl: './product-list.component.html',
  standalone: true,
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent {

  @Input() data: Product[] | [] = [];

  @Input() isFavorite!: (productId: number) => Observable<boolean>;
  @Output() toggleFavorite = new EventEmitter<Product>();



}
