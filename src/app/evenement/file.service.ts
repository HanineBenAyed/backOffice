import { HttpClient, HttpEvent, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
  })
export class FileService {
    url = 'http://localhost:8097/file/upload';
    constructor(private http: HttpClient
        ) { }
        upload(formData: FormData): Observable<any> {
            return this.http.post(this.url, formData);
          }
        }