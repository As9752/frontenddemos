import { Injectable } from '@angular/core';
import { Product } from '../model/product';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private apiUrl = 'https://64c9fb12b2980cec85c2ab0f.mockapi.io/api/products';
  
  constructor(private http: HttpClient) {}

  private counter = 1;
  private products: Product[] = [];

  private productsList: Product[] = [];
  private productsSubject$: BehaviorSubject<Product[]> = new BehaviorSubject(this.getFromStorage());
  products$ = this.productsSubject$.asObservable()

  getFromStorage(){
    const productsFromStorage = sessionStorage.getItem('products');
    if(productsFromStorage){
      this.products = JSON.parse(productsFromStorage);      
    }
    return this.products
  }

  setToStorage(){
    sessionStorage.setItem('products', JSON.stringify(this.products));
  }
  
  getProducts() {
    return this.products;
  }

  // addProduct(product: Product): void {
  //   this.products.push(product);
  //   this.setToStorage();
  // }


  getApiData() {
    return this.http.get<Product[]>(this.apiUrl);
  }

  addProduct(product: Omit<Product, 'id'>) {

    return this.http.post('https://64c9fb12b2980cec85c2ab0f.mockapi.io/api/products', product)

  }

 

  getAllProducts() {

    return this.getFromStorage()

  }

 

  getProduct(id: string) {

    return this.http.get<Product>(`https://64c9fb12b2980cec85c2ab0f.mockapi.io/api/products/${id}`)

  }

 

  getAllFromAPI() {

    return this.http.get<Product[]>('https://64c9fb12b2980cec85c2ab0f.mockapi.io/api/products')

  }
}
