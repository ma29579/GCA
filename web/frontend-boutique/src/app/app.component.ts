import {Component, OnInit} from '@angular/core';
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons';
import {CartService} from "./shared/cart.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'frontend-boutique';
  faShoppingCart = faShoppingCart;

  cartAmount = 0;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cartService.shoppingCartItems$.subscribe(n => this.cartAmount++);
  }
}
