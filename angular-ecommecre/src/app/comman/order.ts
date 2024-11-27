import { OrderItem } from "./order-item";

export class Order {
    totalQuantity!: number;
    totalPrice!: number;
    customerFirstName!: string;
    customerLastName!: string;
    customerEmail!: string;
    shippingAddress!: string;
    billingAddress!: string;
    orderItems!: OrderItem[];
}
