import { Component } from '@angular/core';
import { Product } from 'src/app/model/product';
import { ProductService } from '../../product.service';
import { CartService } from 'src/app/cart/cart.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {
  products: Product[] = [];

  constructor(
    private productService: ProductService,
    private cartService: CartService) { }
    // apiData: ApiResponse | null = null;
    isLoading = true;

  ngOnInit(): void {
    this.products = this.productService.getProducts();
    this.productService.getApiData().subscribe(
      (products: Product[])=>{
        this.products= products
      }
    );
  }
  onAddToCart(product: Product): void {
    this.cartService.addToCart(product);
  }





}
