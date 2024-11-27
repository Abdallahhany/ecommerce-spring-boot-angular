import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { OrderHistory } from '../comman/order-history';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class OrderHistoryService implements OnInit {
  private orderUrl = environment.apiUrl + '/api/orders';

  constructor(private httpClient: HttpClient) {}

  getOrderHistory(theEmail: string): Observable<GetResponseOrderHistory> {
    const searchUrl = `${this.orderUrl}/search/findByCustomerEmailOrderByDateCreatedDesc?email=${theEmail}`;
    return this.httpClient.get<GetResponseOrderHistory>(searchUrl);
  }

  ngOnInit(): void {}
}

interface GetResponseOrderHistory {
  _embedded: {
    orders: OrderHistory[];
  };
}
