import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { products } from '../products';
import { PRODUCTS } from '../mock-products';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public cartList: any = [];
  public productList = new BehaviorSubject<any>([]);
  public search = new BehaviorSubject<string>("");


  constructor() { 
    this.search.asObservable();
  }


  getProducts(): Observable<any>{
    return this.productList.asObservable();
  }

  setProduct(product: any) {
    this.cartList.push(...product);
    this.productList.next(product);
  }

  // add products to cart
  addToCart(product:any){
    this.cartList.push(product)
    this.productList.next(this.cartList);
    this.getTotalPrice();
    console.log('cartlist****',this.cartList)
  }


  getTotalPrice() : number{
    let grandTotal = 0;
    this.cartList.map((x: any) => {
      grandTotal += x.price;
    })
    return grandTotal;
  }

  // Remove individual product

  removeCartItem(product: any) {
    this.cartList.map((x: any, index:any)=>{
      if(product.id === x.id){
        this.cartList.splice(index, 1)
      }
    })
    this.productList.next(this.cartList);
  }

  // Remove all products

  removeAllCartItem(){
    this.cartList = [];
    this.productList.next(this.cartList)
  }

}

