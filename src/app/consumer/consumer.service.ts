import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Consumer } from './model/consumer';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConsumerService {

  constructor(private http : HttpClient) {}


   getlist(): Observable<Consumer[]>{
    return this.http.get<Consumer[]>('api/consumers');
   }


   filterConsumers(searched :string): Observable<Consumer[]>{
    return this.http.get<Consumer[]>(`api/consumers?q=${searched}`);
   }
}
