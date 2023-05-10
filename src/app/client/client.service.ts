import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Client } from './client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  
  constructor(private http: HttpClient) { }

  path = "http://localhost:8080/clients";

  get() {
    return this.http.get<Client[]>(this.path);
  }

  create(payload: Client) {
    return this.http.post<Client>(this.path, payload);
  }
  getById(id: number) {
    return this.http.get<Client>(`${this.path}/${id}`);
   }
    
   update(payload:Client){
    return this.http.put(`${this.path}/${payload.id}`,payload);
   }
   delete(id:number){
    return this.http.delete<Client>(`${this.path}/${id}`);
 }
}
