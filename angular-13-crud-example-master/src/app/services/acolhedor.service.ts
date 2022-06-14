import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Acolhedor } from '../models/acolhedor.model';

const baseUrl = 'http://localhost:8080/api/acolhedores';

@Injectable({
  providedIn: 'root'
})
export class AcolhedorService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Acolhedor[]> {
    return this.http.get<Acolhedor[]>(baseUrl);
  }

  get(id: any): Observable<Acolhedor> {
    return this.http.get(`${baseUrl}/${id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }

  findByCountry(pais: any): Observable<Acolhedor[]> {
    return this.http.get<Acolhedor[]>(`${baseUrl}?pais=${pais}`);
  }
}
