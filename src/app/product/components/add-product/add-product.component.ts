import { Component, inject } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormBuilder, Validators } from '@angular/forms';
import { ProductService } from '../../product.service';


@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent {
  formData: FormGroup;
  constructor(private ProductService: ProductService, private fb : FormBuilder) {
    this.formData = this.fb.group({
      title: ['', Validators.required],
      description : ['', Validators.required],
      price: ['', Validators.required]
    })
  
  }
  showForm = false;



  
  onAddProduct() {
    console.log(this.formData);

    this.ProductService.addProduct({
      // id:this.formData.id,
      title: this.formData.value.title || '',
      description: this.formData.value.description || '',
      price: parseFloat('' + this.formData.value.price),
    }).subscribe(
      ()=> {
        this.formData.reset()
      }
    );
  }

  hideForm() {
    this.showForm = false;
  }
}
