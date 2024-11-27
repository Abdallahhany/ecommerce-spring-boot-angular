import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { CartItem } from '../../comman/cart-item';

@Component({
  selector: 'app-cart-details',
  templateUrl: './cart-details.component.html',
  styleUrl: './cart-details.component.css',
})
export class CartDetailsComponent implements OnInit {
  totalPrice: number = 0.0;
  totalQuantity: number = 0;
  cartItems: CartItem[] = [];
  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.listCartDetails();
  }
  listCartDetails() {
    this.cartItems = this.cartService.cartItems;
    this.cartService.totalPrice.subscribe((data) => (this.totalPrice = data));
    this.cartService.totalQuantity.subscribe(
      (data) => (this.totalQuantity = data)
    );
    this.cartService.computeCartTotals();
  }
  checkout() {

  }
  remove( cartItem: CartItem) {
    this.cartService.remove(cartItem);
  }

  decrementQuantity(cartItem: CartItem) {
    this.cartService.decrementQuantity(cartItem);
  }
  incrementQuantity(cartItem: CartItem) {
    this.cartService.addToCart(cartItem);
  }
}
