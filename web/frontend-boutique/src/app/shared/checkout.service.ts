import { Injectable } from '@angular/core';
import {HttpClient, HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest} from '@angular/common/http';
import { Observable } from 'rxjs';
import {environment} from "../../environments/environment";

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
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': `Basic ` + btoa(`${environment.userName}:${environment.password}`)
      })
    };
    return this.http.post('//localhost:8083/checkout/validate', cart, httpOptions);
  }

}
