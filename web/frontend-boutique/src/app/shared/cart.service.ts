import { Injectable } from '@angular/core';
import {HttpClient, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import { Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService implements HttpInterceptor {
  private node = new Subject<number>();

  shoppingCartItems$ = this.node.asObservable();
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    request = request.clone({
      withCredentials: true
    });

    return next.handle(request);
  }
  constructor(private http: HttpClient) {
  }


  getCart(): Observable<any> {
    return this.http.get('//localhost:8081/cart');
  }

  getCartAmount(): Observable<any> {
    return this.http.get('//localhost:8081/cart/itemNumber');
  }

  addProductByID(id: number): Observable<any> {
    console.log(id);
    this.node.next(1);
    return this.http.get('//localhost:8081/cart/addProduct/' + id);
  }
}
