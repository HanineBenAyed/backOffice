import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ressources } from 'src/app/models/ressource';

@Injectable({
  providedIn: 'root'
})
export class RessourcesService {
  private apiUrl = 'http://localhost:8097'; 

  constructor(private http: HttpClient) {}

  getAllRessources(): Observable<Ressources[]> {
    return this.http.get<Ressources[]>(`${this.apiUrl}/getAllRessources`);
  }

  addRessources(ressource: Ressources): Observable<any> {
    return this.http.post(`${this.apiUrl}/add-Ress`, ressource);
  }

  deleteRess(idRs: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/deleteRes/${idRs}`);
  }

  updateEvent(idRs: number, ressource: Ressources): Observable<any> {
    return this.http.put(`${this.apiUrl}/updateRes/${idRs}`, ressource);
  }
}
