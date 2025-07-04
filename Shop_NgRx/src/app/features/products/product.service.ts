import {inject, Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  http = inject(HttpClient);

  constructor() { }

  getProducts(): Observable<any> {
    return this.http.get('https://fakestoreapi.com/products')
  }
}
