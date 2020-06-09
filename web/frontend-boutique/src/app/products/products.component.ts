import { Component, OnInit, Output } from '@angular/core';
import {ProductService} from '../shared/products.service';
import {CartService} from '../shared/cart.service';
import {EventEmitter} from 'events';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  // @ts-ignore
  products: Array<any>;

  constructor(private productService: ProductService, private cartService: CartService) { }

  ngOnInit(): void {
    this.productService.getAll().subscribe(data => {
      this.products = data;
    });
  }

  callCartAPI(param: number) {
    this.cartService.addProductByID(param).subscribe(data => {
        this.cartService.getCartAmount().subscribe(amount => {
          this.cartService.setCartAmount(amount);
        });
    });
  }

}
