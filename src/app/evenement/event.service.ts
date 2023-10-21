import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Event } from "./event.model";


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
 

  updateEvent( event: Event): Observable<any> {
    return this.http.put(`${this.apiUrl}/updateEvent/${event.idEvent}`, event);
  }
}