// src/app/addproduct/addproduct.component.ts
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ValidatorFn, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from '../core/services/product.service';
import { CategorieService } from '../core/services/categorie.service';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit{
  productForm: FormGroup = new FormGroup({
    title: new FormControl("", [
      Validators.required,
      Validators.minLength(6),
      this.noSpecialCharactersValidator()
    ]),
    description: new FormControl("", [
      this.noSpecialCharactersValidator()
    ]),
    price: new FormControl("", [
      Validators.required,
      Validators.min(0.01)
    ]),
    idCategorie: new FormControl("", Validators.required),
    quantity: new FormControl("", [
      Validators.required,
      Validators.min(1)
    ]),
    image: new FormControl('', [Validators.required]),
  });

  maxFileSize = 5 * 1024 * 1024;
  allowedFileTypes = ['image/jpeg', 'image/png', 'image/gif'];
  categories : any[] | undefined;
  imgUrl : any = null;

  constructor(
    private router: Router,
    private productService: ProductService,
    private categorieService: CategorieService,
  ) {}

  ngOnInit(): void {
    this.categorieService.getAllCategories().subscribe(
      data=> {
        this.categories = data;
      },
      error=>console.log(error)
    )

    this.imgUrl = "/assets/images/not_found.jpg"
  }

  addProduct() {
    if (this.productForm.valid) {
      this.productService.addProduct(this.productForm.value).subscribe({
        next: (newProduct) => {
          console.log('Product added successfully:', newProduct);
          this.productForm.reset();
          // Navigate or perform further actions
        },
        error: (err) => {
          console.error('Error adding product:', err);
        }
      });
    } else {
      this.markFormGroupTouched(this.productForm);
    }

    this.imgUrl=null;
  }

  noSpecialCharactersValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const regex = /^[a-zA-Z0-9\u00C0-\u00FF ]*$/;
      const isValid = regex.test(control.value);
      return isValid ? null : { specialCharacters: true };
    };
  }

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      if (file.size > this.maxFileSize) {
        alert(`File size exceeds limit (Max: ${this.maxFileSize / (1024 * 1024)} MB)!`);
        this.productForm.get('image')!.setValue('');
        return;
      }
      if (!this.allowedFileTypes.includes(file.type)) {
        alert(`Invalid file type. Allowed types: ${this.allowedFileTypes.join(', ')}.`);
        this.productForm.get('image')!.setValue('');
        return;
      }
      this.productForm.get('image')!.setValue(`/assets/images/${file.name}`);
      this.imgUrl=this.productForm.get('image')?.value;
    }
  }

  markFormGroupTouched(formGroup: FormGroup) {
    Object.values(formGroup.controls).forEach(control => {
      control.markAsTouched();
    });
  }

  navigateToEdit(): void {
    this.router.navigateByUrl('/edit'); // Navigue vers /edit
  }
}
