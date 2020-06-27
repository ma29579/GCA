import { Injectable } from '@angular/core';
import {HttpClient, HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService{
  constructor(private http: HttpClient) {
  }

  getAll(): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': `Basic ` + btoa(`${environment.userName}:${environment.password}`)
      })
    };
    return this.http.get(environment.catalogApi + '/', httpOptions);
  }
}
