import {Component, inject, OnInit} from '@angular/core';
import {ChevronRight, LucideAngularModule} from 'lucide-angular';
import {CartActions} from '../../cart/store/cart.actions';
import {Store} from '@ngrx/store';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-success',
  imports: [
    RouterLink,
    LucideAngularModule
  ],
  templateUrl: './success.component.html',
  standalone: true,
  styleUrl: './success.component.scss'
})
export class SuccessComponent implements OnInit{

  store = inject(Store);

  protected readonly ChevronRight = ChevronRight;

  constructor() { }

  ngOnInit() {
    this.store.dispatch(CartActions.resetCart());
  }

}
