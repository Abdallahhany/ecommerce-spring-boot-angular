import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Purchase } from '../comman/purchase';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { PaymentInfo } from '../comman/payment-info';

@Injectable({
  providedIn: 'root',
})
export class CheckoutService {
  private purchaseUrl = environment.apiUrl + '/checkout/purchase';

  private paymentUrl = environment.apiUrl + '/checkout/payment-intent';

  constructor(private httpClient: HttpClient) {

  }

  placeOrder(thePurchase: Purchase):Observable<any>{
    return this.httpClient.post<Purchase>(this.purchaseUrl, thePurchase);
  }

  createPaymentIntent(paymentInfo: PaymentInfo): Observable<any> {
    return this.httpClient.post<PaymentInfo>(this.paymentUrl, paymentInfo);
  }
}
