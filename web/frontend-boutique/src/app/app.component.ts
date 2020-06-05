import { Component } from '@angular/core';
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend-boutique';
  faShoppingCart = faShoppingCart;

  cartAmount = 0;

  onNewItem(){
    this.cartAmount++;
  }
}
