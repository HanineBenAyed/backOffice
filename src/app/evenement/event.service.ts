import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class EventService {
  private apiUrl = 'http://localhost:8097'; 

  constructor(private http: HttpClient) {}

  getAllEvents(): Observable<Event[]> {
    return this.http.get<Event[]>(`${this.apiUrl}/getAllEvents`);
  }

  addEvent(event: Event): Observable<any> {
    return this.http.post(`${this.apiUrl}/add-Event`, event);
  }

  deleteEvent(idEvent: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/deleteEvent/${idEvent}`);
  }

  updateEvent(idEvent: number, event: Event): Observable<any> {
    return this.http.put(`${this.apiUrl}/updateEvent/${idEvent}`, event);
  }
}