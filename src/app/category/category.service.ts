import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Category } from './category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }

  path = "http://localhost:8080/category"

  get() {
    return this.http.get<Category[]>(this.path);
  }

  create(payload: Category) {
    return this.http.post<Category>(this.path, payload);
  }
  getById(id: number) {
    return this.http.get<Category>(`${this.path}/${id}`);
   }
    
   update(payload:Category){
    return this.http.put(`${this.path}/${payload.id}`,payload);
   }
   delete(id:number){
    return this.http.delete<Category>(`${this.path}/${id}`);
 }





}
