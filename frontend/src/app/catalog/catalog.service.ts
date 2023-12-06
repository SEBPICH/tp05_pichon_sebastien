import { Injectable } from '@angular/core';
import { Product } from '../shared/models/product';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';
@Injectable()
export class CatalogService {
  constructor(private http: HttpClient) {}
  public getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(environment.backendProduct);
  }
}
