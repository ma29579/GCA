import {Component, OnInit} from '@angular/core';
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons';
import {CartService} from './shared/cart.service';
import {environment} from "../environments/environment";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'frontend-boutique';
  faShoppingCart = faShoppingCart;

  cartAmount = 0;
  hasUserId = false;
  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    console.log("!!", $ENV.CATALOG_API_SERVICE_HOST);
    if (!localStorage.getItem('userId')) {
      this.cartService.createUser().subscribe(user => {
        console.log(user);
        this.hasUserId = true;
        localStorage.setItem('userId', user.userId);
      });
    } else {
      console.log('Existing user found: ', localStorage.getItem('userId'));
      this.hasUserId = true;
      this.cartService.getCartAmount().subscribe(amount => {
        this.cartService.setCartAmount(amount);
      });
    }
    this.cartService.shoppingCartItemsCount$.subscribe(n => this.cartAmount = n);
  }
}
