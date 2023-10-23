import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Payment } from './Payment.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PaymentService {
  private baseUrl = 'http://localhost:8096/api/admin/payment';
  private apiUrl = 'http://localhost:8096/api/payment'; // Replace with your actual API endpoint


  constructor(private http: HttpClient) {}
  getPayments(): Observable<Payment[]> {
    return this.http.get<Payment[]>(`${this.apiUrl}/getPayments`);
  }


  validatePayment(id: number) : Observable<any>{
    return this.http.get(`${this.baseUrl}/validatePayment/${id}`);
  }

  declinePayment(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/declinePayment/${id}`);
  }

  test() {
    return this.http.get(`${this.baseUrl}/test`);
  }
  getPaymentById(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/getPaymentByid/${id}`);
  }
  updatePayment(payment: any,id: number): Observable<any> {
    return this.http.put(`${this.baseUrl}/updatePayment`, payment);
  }
}
