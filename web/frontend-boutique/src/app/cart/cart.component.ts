import { Component, OnInit } from '@angular/core';
import {ProductService} from '../shared/products.service';
import {CartService} from '../shared/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  products: Array<any>;
  cartItem: Array<any>;

  constructor(private productService: ProductService, private cartService: CartService) { }

  ngOnInit(): void {
    this.cartService.getCart().subscribe(data => {
      this.cartItem = data;
      console.log(data);
    });
  }

}
