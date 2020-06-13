import { Injectable } from '@angular/core';
import {HttpClient, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import { Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService implements HttpInterceptor {
  private node = new Subject<number>();

  shoppingCartItemsCount$ = this.node.asObservable();

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    request = request.clone({
      withCredentials: true,
      setHeaders: {
        Authorization: `Basic 1c56413a-3e07-40a0-b279-c93fc42c49d0`
      }
    });

    return next.handle(request);
  }
  constructor(private http: HttpClient) {
    this.node.next(0);
  }


  getCart(): Observable<any> {
    return this.http.get('//localhost:8081/cart/' + localStorage.getItem('userId'));
  }

  getCartAmount(): Observable<any> {
    return this.http.get('//localhost:8081/cart/itemNumber/' + localStorage.getItem('userId'));
  }

  setCartAmount(amount: number) {
    this.node.next(amount);
  }

  addProductByID(id: number): Observable<any> {
    return this.http.get('//localhost:8081/cart/addProduct/' + id + '/' + localStorage.getItem('userId'));
  }
  createUser(): Observable<any> {
    return this.http.get('//localhost:8081/cart/init');
  }

  deleteCart(): Observable<any> {
    return this.http.get('//localhost:8081/cart/empty/' + localStorage.getItem('userId'));
  }
}
