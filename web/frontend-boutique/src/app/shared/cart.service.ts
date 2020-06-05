import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

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
    return this.http.get('//localhost:8081/cart/addProduct/' + id);
  }
}
