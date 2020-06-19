import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable, Subject} from 'rxjs';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private node = new Subject<number>();

  shoppingCartItemsCount$ = this.node.asObservable();
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': `Basic ` + btoa(`${environment.userName}:${environment.password}`)
    })
  };
  constructor(private http: HttpClient) {
    this.node.next(0);
  }


  getCart(): Observable<any> {
    return this.http.get('//localhost:8081/cart/' + localStorage.getItem('userId'), this.httpOptions);
  }

  getCartAmount(): Observable<any> {
    return this.http.get('//localhost:8081/cart/itemNumber/' + localStorage.getItem('userId'), this.httpOptions);
  }

  setCartAmount(amount: number) {
    this.node.next(amount);
  }

  addProductByID(id: number): Observable<any> {
    return this.http.get('//localhost:8081/cart/addProduct/' + id + '/' + localStorage.getItem('userId'), this.httpOptions);
  }
  createUser(): Observable<any> {
    return this.http.get('//localhost:8081/cart/init', this.httpOptions);
  }

  deleteCart(): Observable<any> {
    return this.http.get('//localhost:8081/cart/empty/' + localStorage.getItem('userId'), this.httpOptions);
  }
}
