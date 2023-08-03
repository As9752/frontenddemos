import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { of, switchMap } from 'rxjs';
import { Product } from 'src/app/model/product';
import { ProductService } from '../../product.service';
import { CartService } from 'src/app/cart/cart.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent {

  product: Product | null = null;
  constructor(private activedRoute: ActivatedRoute, private productSvc: ProductService,private cartService: CartService) { }

  ngOnInit(){

    this.activedRoute.paramMap
      .pipe(
        switchMap((paramMap: ParamMap) => {
          const productId = paramMap.get('productId');
          if(productId){
            return this.productSvc.getProduct(productId);
          }
          return of(null);         
        })
      )
      .subscribe({
        next: (product) => {
          this.product = product;
        }
      })
  }
  onAddToCart(product: Product): void {
    this.cartService.addToCart(product);
  }

}
