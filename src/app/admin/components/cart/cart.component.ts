import { Component, OnInit } from '@angular/core';
import { CartService } from '../../shared/cart.service'; 
import { Subscription } from 'rxjs';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {


  public products: any = [];
  public grandTotal !: number;
  subscription:Subscription;
  constructor(
    private cartService:CartService
  ) { }

  ngOnInit(): void {

    this.cartService.getProducts()
    .subscribe((res)=>{
      this.products = res;
      console.log('Cart Products', this.products);
      this.grandTotal = this.cartService.getTotalPrice();
    })
    
    //  this.products = this.cartService.cartList;
    //  this.grandTotal = this.cartService.getTotalPrice();
    //  console.log('products', this.products)
  }

  removeItem(product?: any) {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.cartService.removeCartItem(product);
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      }
    })

  }

  emptyCart() {
    Swal.fire({
      title: 'Are you sure?',
      text: "You want to remove all items!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.cartService.removeAllCartItem();
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      }
    })

  }

}
