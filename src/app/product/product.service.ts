import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  path = "http://localhost:8080/products";

  get() {
    return this.http.get<Product[]>(this.path);
  }

  create(payload: Product) {
    return this.http.post<Product>(this.path, payload);
  }
  getById(id: number) {
    return this.http.get<Product>(`${this.path}/${id}`);
   }
    
   update(payload:Product){
    return this.http.put(`${this.path}/${payload.id}`,payload);
   }
   delete(id:number){
    return this.http.delete<Product>(`${this.path}/${id}`);
 }
 search(query: string){
  return this.http.get<Product[]>(`${this.path}?query=${query}`);
 }



}
