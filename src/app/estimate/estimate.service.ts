import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Estimate } from './estimate';

@Injectable({
  providedIn: 'root'
})
export class EstimateService {

  constructor(private http: HttpClient) { }

  path = "http://localhost:8080/estimates";


  get() {
    return this.http.get<Estimate[]>(this.path);
  }

  create(payload: Estimate) {
    return this.http.post<Estimate>(this.path, payload);
  }
  getById(id: number) {
    return this.http.get<Estimate>(`${this.path}/${id}`);
   }
    
   update(payload:Estimate){
    return this.http.put(`${this.path}/${payload.id}`,payload);
   }
   delete(id:number){
    return this.http.delete<Estimate>(`${this.path}/${id}`);
  }
  getAllLines(id:number){
    return this.http.get(`${this.path}/${id}/lines`);
  }
}
