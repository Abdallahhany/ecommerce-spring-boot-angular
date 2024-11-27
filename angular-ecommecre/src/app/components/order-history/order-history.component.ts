import { Component, OnInit } from '@angular/core';
import { OrderHistory } from '../../comman/order-history';
import { OrderHistoryService } from '../../services/order-history.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-order-history',
  templateUrl: './order-history.component.html',
  styleUrl: './order-history.component.css',
})
export class OrderHistoryComponent implements OnInit {
  orderHistoryList: OrderHistory[] = [];
  storage: Storage = sessionStorage;

  constructor(private orderHistoryService: OrderHistoryService) {}

  ngOnInit(): void {
    this.handleOrderHistory();
  }

  handleOrderHistory() {
    const theEmail = JSON.parse(this.storage.getItem('userEmail')!);
    console.log(theEmail);

    this.orderHistoryService.getOrderHistory(theEmail).subscribe(
      (data) => {
        this.orderHistoryList = data._embedded.orders;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  viewOrderDetails(orderHistory: OrderHistory) {
    console.log(orderHistory);
  }
}
