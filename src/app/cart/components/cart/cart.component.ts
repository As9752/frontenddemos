import { Component } from '@angular/core';
import { Product } from 'src/app/model/product';
import { CartService } from '../../cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
  cartItems: Product[] = [];
  cartTotal: number= 0;
  cartImg: (string | undefined)[] | undefined;
  constructor(private cartSvc: CartService, private router: Router){}

  ngOnInit() {
    this.cartSvc.cart$.subscribe({
      next: (cart) => {
        // console.log(cart);
        this.cartItems = cart.items;
        this.cartTotal =cart.total;
        this.cartImg = cart.items.map((item) => item.imgUrl); // Retrieve image URLs from items
      }
    });
  }

  // onClick(){
  //   this.router.navigateByUrl('/add');
  // }
deleteFromCart(id:number)
{
   const updatedCartItems = this.cartItems.filter((cartItem: { id: number; }) => cartItem.id !== id);

  console.log(updatedCartItems);
  // this.cartSvc.deleteItemFromCart(cart);
}

}
