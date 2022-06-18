import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { ProductsService } from '../../shared/products.service';
import { CartService } from '../../shared/cart.service'; 

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  public productList: any;
  public filterCategory: any;
  searchKey: string = '';
  filterKey: string = '';
  selectedItem: any;
  showBtn:boolean = false;


  constructor(
    private productService: ProductsService,
    private cartService: CartService
  ) { }


  ngOnInit(): void {
    this.productService.getAllProducts()
    .subscribe((res)=>{
      console.log('response 11', res)
      this.productList = res;
      this.filterCategory = res

      this.productList.forEach((x: any)=> {
        Object.assign(x, {quantity:1, total: x.price});
      });

      this.filterCategory.forEach((x:any)=>{
        if(x.isOutOfStock){
          this.showBtn = true;
        }
      })
    })

    /// search service 
    this.cartService.search.subscribe((val: any) => {
      this.searchKey = val;
    })
  }

  addToCart(product:any){
    this.cartService.addToCart(product);
  }


  filterItems() {
    this.filterCategory = this.productList.filter((item: any) => item.name.toLowerCase().includes(this.selectedItem.toLowerCase()))
  }

}
