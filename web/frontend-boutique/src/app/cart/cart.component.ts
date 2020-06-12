import { Component, OnInit } from '@angular/core';
import {ProductService} from '../shared/products.service';
import {CartService} from '../shared/cart.service';
import {faShoppingCart, faTrash} from '@fortawesome/free-solid-svg-icons';
import {ShippingService} from '../shared/shipping.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  products: Array<any>;
  cartItem: Array<any> = [];
  shippingCost = 0;
  articleCost = 0;

  validEmail = true;
  validMonthYear = true;
  validCreditNumber = true;
  validCCV = true;

  // Icon
  faShoppingCart = faShoppingCart;
  faTrash = faTrash;

  // Checkoutitem:
  checkoutData = {
    userID: '',
    firstName: '',
    lastName: '',
    shippingCost: 0,
    totalPrice: 0,
    products: [],
    creditCardInformation: {
      number: '',
      monthAndYear: '',
      ccv: ''
    },
    street: '',
    zip: '',
    city: '',
    email: ''
  };

  constructor(private productService: ProductService, private cartService: CartService, private shippingService: ShippingService, private router: Router) { }

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

  checkEmail(email: string) {
    const regex = '^\\w+@[a-zA-Z_]+?\\.[a-zA-Z]{2,3}$';
    if (email.match(regex) == null) {
      this.validEmail = false;
      this.checkoutData.email = ''
    } else {
      console.log("VALID");
      this.validEmail = true;
      this.checkoutData.email = email;
    }

    if (email === '') {
      this.validEmail = true;
    }
  }
  checkCreditCard(card: string) {
      const regex = '\\d{4}-?\\d{4}-?\\d{4}-?\\d{4}';
      if (card.match(regex) == null) {
        this.validCreditNumber = false;
        this.checkoutData.creditCardInformation.number = '';
      } else {
        console.log("VALID");
        this.validCreditNumber = true;
        this.checkoutData.creditCardInformation.number = card;
      }

      if (card === '') {
        this.validCreditNumber = true;
      }
  }
  checkMonthYear(monthYear: string) {
    console.log(monthYear);
    const regex = '^((0[1-9])|(1[0-2]))\\/(\\d{2})$';
    if (monthYear.match(regex) == null) {
      this.validMonthYear = false;
      this.checkoutData.creditCardInformation.monthAndYear = '';
    } else {
      this.validMonthYear = true;
      this.checkoutData.creditCardInformation.monthAndYear = monthYear;
    }
    if (monthYear === '') {
      this.validMonthYear = true;
    }
  }
  checkCCV(ccv: string) {
    console.log(ccv);
    const regex = '^([0-9]{3,4})$';
    if (ccv.match(regex) == null) {
      this.validCCV = false;
      this.checkoutData.creditCardInformation.ccv = '';
    } else {
      this.checkoutData.creditCardInformation.ccv = ccv;
    }

    if (ccv === '') {
      this.validCCV = true;
    }
  }

  deleteCart() {
    this.cartService.deleteCart().subscribe(() => {
      this.router.navigate(['/']);
    });
  }

  checkout() {

  }
}
