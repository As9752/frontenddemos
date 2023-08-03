import { Component } from '@angular/core';
import { Product } from 'src/app/model/product';
import { CartService } from '../../cart.service';

@Component({
  selector: 'app-mini-cart',
  templateUrl: './mini-cart.component.html',
  styleUrls: ['./mini-cart.component.scss']
})
export class MiniCartComponent {
  cart: Product[] = [];

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cart = this.cartService.getCart();
    console.log(this.cart);
  }

}
