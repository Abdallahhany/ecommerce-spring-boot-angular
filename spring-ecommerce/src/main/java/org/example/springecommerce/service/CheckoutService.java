package org.example.springecommerce.service;

import com.stripe.exception.StripeException;
import com.stripe.model.PaymentIntent;
import org.example.springecommerce.dto.PaymentInfo;
import org.example.springecommerce.dto.Purchase;
import org.example.springecommerce.dto.PurchaseResponse;

public interface CheckoutService {
    PurchaseResponse placeOrder(Purchase purchase);
    PaymentIntent createPaymentIntent(PaymentInfo paymentInfo) throws StripeException;
}
