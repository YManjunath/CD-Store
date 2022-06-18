import { Injectable } from '@angular/core';
import { products } from '../products';
import { PRODUCTS } from '../mock-products';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  public productList = new BehaviorSubject<any>(PRODUCTS);

  constructor() { }

  getAllProducts():Observable<any>{
    return this.productList.asObservable();
  }
}
