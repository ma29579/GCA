import { Injectable } from '@angular/core';
import {HttpClient, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {
  checkoutSummary = null;

  constructor(private http: HttpClient) {
  }

  setCheckoutSummary(item: any) {
    this.checkoutSummary = item;
  }
  getCheckoutSummary() {
    return this.checkoutSummary;
  }
  postCart(cart: any): Observable<any> {
    return this.http.post('//localhost:8083/checkout/validate', cart);
  }

}
