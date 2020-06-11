import { Component, OnInit } from '@angular/core';
import {ProductService} from '../shared/products.service';
import {CartService} from '../shared/cart.service';
import {faShoppingCart, faTrash} from '@fortawesome/free-solid-svg-icons';
import {ShippingService} from '../shared/shipping.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  products: Array<any>;
  cartItem: Array<any>;
  shippingCost = 0;
  articleCost = 0;

  faShoppingCart = faShoppingCart;
  faTrash = faTrash;
  constructor(private productService: ProductService, private cartService: CartService, private shippingService: ShippingService) { }

  ngOnInit(): void {
    this.cartService.getCart().subscribe(data => {
      this.cartItem = data;
      data.forEach(x => this.articleCost += x.price );

      console.log(this.articleCost);
      this.shippingService.getShippingCost(this.articleCost).subscribe((n) => {
          this.shippingCost = n;
      });
      console.log(data);
    });
  }

}
