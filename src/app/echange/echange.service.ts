import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Echange } from './echange.model';

@Injectable({
  providedIn: 'root'
})
export class EchangeService {
  private apiBaseUrl = 'http://localhost:8280'; // Replace with your API URL

  constructor(private http: HttpClient) { }

  createEchange(echange: Echange): Observable<Echange> {
    return this.http.post<Echange>(`${this.apiBaseUrl}/echanges`, echange);
  }

  getEchanges(): Observable<Echange[]> {
    return this.http.get<Echange[]>(`${this.apiBaseUrl}/echanges`);
  }

  getEchange(id: number): Observable<Echange> {
    return this.http.get<Echange>(`${this.apiBaseUrl}/echanges/${id}`);
  }

  updateEchange(echange: Echange): Observable<Echange> {
    return this.http.put<Echange>(`${this.apiBaseUrl}/echanges/${echange.id}`, echange);
  }

  deleteEchange(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiBaseUrl}/echanges/${id}`);
  }
  participate(id: number): Observable<Echange> {
    return this.http.post<Echange>(`${this.apiBaseUrl}/echanges/participate/${id}`, {});
  }
}
