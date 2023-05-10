import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EstimateLine } from './estimate-line';

@Injectable({
  providedIn: 'root'
})
export class EstimateLineService {



  constructor(private http: HttpClient) { }

  path = "http://localhost:8080/estimatelines";


  get() {
    return this.http.get<EstimateLine[]>(this.path);
  }

  create(payload: EstimateLine) {
    return this.http.post<EstimateLine>(this.path, payload);
  }
  getById(id: number) {
    return this.http.get<EstimateLine>(`${this.path}/${id}`);
   }
    
   update(payload:EstimateLine){
    return this.http.put(`${this.path}/${payload.id}`,payload);
   }
   delete(id:number){
    return this.http.delete<EstimateLine>(`${this.path}/${id}`);
 }
}
