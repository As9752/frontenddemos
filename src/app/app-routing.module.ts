import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './product/components/add-product/add-product.component';
import { ProductListComponent } from './product/components/product-list/product-list.component';

const routes: Routes = [
  {
    path:'add',
    component:AddProductComponent
  },
  {
   path:'product',
   component:ProductListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
