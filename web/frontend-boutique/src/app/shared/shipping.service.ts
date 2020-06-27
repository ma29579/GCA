import { Injectable } from '@angular/core';
import {HttpClient, HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest} from '@angular/common/http';
import { Observable } from 'rxjs';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ShippingService {
  constructor(private http: HttpClient) {
  }

  getShippingCost(cost: number): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': `Basic ` + btoa(`${environment.userName}:${environment.password}`)
      })
    };
    return this.http.get(environment.shippingApi + '/shipping/cost/' + cost, httpOptions);
  }
}
