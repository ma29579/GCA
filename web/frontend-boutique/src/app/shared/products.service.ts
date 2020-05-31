import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<any> {
    return this.http.get('//localhost:8080/catalog');
  }

  getByID(id: number): Observable<any> {
    return this.http.get('//localhost:8080/catalog/' + id);
  }
}
