import { Component, OnInit } from '@angular/core';
import {ProductService} from '../shared/products.service';
import {CartService} from '../shared/cart.service';
import {faShoppingCart, faTrash} from '@fortawesome/free-solid-svg-icons';
import {ShippingService} from '../shared/shipping.service';
import { Router } from '@angular/router';
import {CheckoutService} from '../shared/checkout.service';

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
  showMissingInformationHint = false;

  validName = true;
  validStreet = true;
  validCity = true;
  validZip = true;
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
    firstLastName: '',
    shippingCost: 0,
    totalPrice: 0,
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

  constructor(private productService: ProductService, private cartService: CartService, private shippingService: ShippingService, private router: Router, private checkoutService: CheckoutService) { }

  ngOnInit(): void {
    this.cartService.getCart().subscribe(data => {
      if(data === null) data = [];
      this.cartItem = data;
      data.forEach(x => this.articleCost += x.price );

      this.shippingService.getShippingCost(this.articleCost).subscribe((n) => {
          this.shippingCost = n;
      });
    });
  }

  checkEmail(email: string) {
    const regex = '^\\w+@[a-zA-Z_]+?\\.[a-zA-Z]{2,3}$';
    if (email.match(regex) == null) {
      this.validEmail = false;
      this.checkoutData.email = '';
    } else {
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
        this.validCreditNumber = true;
        this.checkoutData.creditCardInformation.number = card;
      }

      if (card === '') {
        this.validCreditNumber = true;
      }
  }
  checkMonthYear(monthYear: string) {
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
    const regex = '^([0-9]{3,4})$';
    if (ccv.match(regex) == null) {
      this.validCCV = false;
      this.checkoutData.creditCardInformation.ccv = '';
    } else {
      this.validCCV = true;
      this.checkoutData.creditCardInformation.ccv = ccv;
    }

    if (ccv === '') {
      this.validCCV = true;
    }
  }

  deleteCart() {
    this.cartService.deleteCart().subscribe(() => {
      this.cartService.setCartAmount(0);
      this.cartItem = [];
      this.router.navigate(['/']);
    });
  }

  updateName(name: string) {
    this.checkoutData.firstLastName = name;
    this.validName = true;
  }

  updateStreet(street: string) {
    this.checkoutData.street = street;
    this.validStreet = true;
  }

  updateZip(zip: string) {
    this.checkoutData.zip = zip;
    this.validZip = true;
  }

  updateCity(city: string) {
    this.checkoutData.city = city;
    this.validCity = true;
  }

  checkout() {
    // Validate Data
    this.validName = this.checkoutData.firstLastName !== undefined && this.checkoutData.firstLastName.length > 0;
    this.validStreet = this.checkoutData.street !== undefined && this.checkoutData.street.length > 0;
    this.validZip = this.checkoutData.zip !== undefined && this.checkoutData.zip.length > 0;
    this.validCity = this.checkoutData.city !== undefined && this.checkoutData.city.length > 0;
    this.validEmail = this.checkoutData.email !== undefined && this.checkoutData.email.length > 0;
    this.validCreditNumber = this.validCreditNumber && this.checkoutData.creditCardInformation.number.length > 0;
    this.validMonthYear = this.validMonthYear && this.checkoutData.creditCardInformation.monthAndYear.length > 0;
    this.validCCV = this.validCCV && this.checkoutData.creditCardInformation.ccv.length > 0;

    // Abort when parameters are invalid
    if (!this.validName ||
      !this.validStreet ||
      !this.validZip ||
      !this.validCity ||
      !this.validEmail ||
      !this.validCreditNumber ||
      !this.validMonthYear ||
      !this.validCCV) {
        this.showMissingInformationHint = true;
        return;
    }
    // Fill missing information
    this.checkoutData.userID = localStorage.getItem('userId');
    this.checkoutData.totalPrice = this.articleCost;
    this.checkoutData.shippingCost = this.shippingCost;

    // Execute checkout
    this.checkoutService.postCart(this.checkoutData).subscribe(x => {
        this.checkoutService.setCheckoutSummary(x);
        this.cartService.setCartAmount(0);
        this.cartItem = [];

        localStorage.removeItem('userId');
        console.log(localStorage.getItem('userId'));
        this.router.navigate(['/orderComplete']);
    });
  }
}
