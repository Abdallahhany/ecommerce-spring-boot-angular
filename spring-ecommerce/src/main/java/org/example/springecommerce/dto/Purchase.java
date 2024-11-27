package org.example.springecommerce.dto;


import lombok.Data;
import org.example.springecommerce.entity.*;
import java.util.Set;

@Data
public class Purchase {

    private Customer customer;
    private Address shippingAddress;
    private Address billingAddress;
    private Order order;
    private Set<OrderItem> orderItems;

}
