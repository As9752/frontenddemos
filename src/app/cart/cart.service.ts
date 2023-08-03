import { Injectable } from '@angular/core';
import { Product } from '../model/product';
import { BehaviorSubject, Observable, map } from 'rxjs';

type Cart = {
  total: number;

  items: Product[];
};
@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart: Cart = { total: 0, items: [] };

  cart$: BehaviorSubject<Cart> = new BehaviorSubject(this.getFromStorage());

  getCart(): Product[] {
    return [...this.cart.items];
  }

  getFromStorage() {
    const cartFromStorage = sessionStorage.getItem('cart');

    if (cartFromStorage) {
      this.cart = JSON.parse(cartFromStorage);

      return this.cart;
    }

    return this.cart;
  }

  constructor() {}

  setToStorage() {
    sessionStorage.setItem('cart', JSON.stringify(this.cart));
  }

  addToCart(product: Product) {
    this.cart.items = [...this.cart.items, product];

    this.cart.total = this.cart.items.reduce(
      (acc, item) => item.price + acc,
      0
    );

    this.setToStorage();

    this.cart$.next(this.cart);
  }
  getCartItemCount(): Observable<number> {
    return this.cart$.pipe(map((cart) => cart.total));
  }

  deleteItemFromCart(product:Product)
  {
    
  }
}
