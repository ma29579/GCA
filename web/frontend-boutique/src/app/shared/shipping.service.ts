import { Injectable } from '@angular/core';
import {HttpClient, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShippingService {
  constructor(private http: HttpClient) {
  }

  getShippingCost(cost: number): Observable<any> {
    return this.http.get('//localhost:8080/shipping/cost/' + cost);
  }

}
