import { Component, OnInit } from '@angular/core';
import {CheckoutService} from '../shared/checkout.service';
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons';
import {Router} from "@angular/router";

@Component({
  selector: 'app-order-complete',
  templateUrl: './order-complete.component.html',
  styleUrls: ['./order-complete.component.css']
})
export class OrderCompleteComponent implements OnInit {

  faShoppingCart = faShoppingCart;
  orderSummary = null;
  constructor(private checkoutServie: CheckoutService, private router: Router) { }

  ngOnInit(): void {
    this.orderSummary = this.checkoutServie.getCheckoutSummary();
    if (this.orderSummary === null) {
      this.router.navigate(['/']);
    }
  }
}
