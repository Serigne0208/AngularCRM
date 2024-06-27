import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Consumer } from './model/consumer';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConsumerService {

  constructor(private http: HttpClient) { }


  getlist(): Observable<Consumer[]> {
    return this.http.get<Consumer[]>('api/consumers');
  }


  filterConsumers(searched: string): Observable<Consumer[]> {
    return this.http.get<Consumer[]>(`api/consumers?q=${searched}`);
  }

  createConsumers(consumer: Consumer): Observable<Consumer> {
    if (consumer.id) {
      return this.http.put<Consumer>(`api/consumers/${consumer.id}`, consumer);
    } else {
      return this.http.post<Consumer>('api/consumers', consumer);
    }

  }

  getConsumerById(id: string): Observable<Consumer> {
    return this.http.get<Consumer>(`api/consumers/${id}`);
  }

  deleteConsumerById(id:number): Observable<Consumer>{
    return this.http.delete<Consumer>(`api/consumers/${id}`);
  }
}
