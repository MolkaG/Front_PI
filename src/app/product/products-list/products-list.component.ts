import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ProductService } from 'src/app/core/services/product.service';
import { CartService } from 'src/app/core/services/cart.service';
import { CategorieService } from 'src/app/core/services/categorie.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {
  @ViewChild('popupNotification', { static: false }) popupNotification!: ElementRef;
  @ViewChild('outOfStockNotification', { static: false }) outOfStockNotification!: ElementRef;

  products: any[] = [];
  filteredProducts: any[] = [];
  minPrice: number | undefined;
  maxPrice: number | undefined;
  categoryName: string = '';
  productAddedToCart: number | null = null;
  errorMessage: string | null = null;
  userId: string = "667849cef7bb9f08e3c40fec";

  cart: any[] = [];
  categories : any[] | undefined;


  constructor(
    private productService: ProductService,
    private cartService: CartService,
    private categorieService: CategorieService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getProducts();
    this.categorieService.getAllCategories().subscribe(
      data=> this.categories = data,
      error=>console.log(error)
    )
  }

  validateCategory(): boolean {
    const regex = /^[a-zA-Z0-9\s]*$/;
    return regex.test(this.categoryName);
  }

  getProducts(): void {
    this.productService.getProducts().subscribe(
      (data) => {
        this.products = data;
        this.applyFilters(); // Apply filters once products are loaded
      },
      (error) => {
        console.error('Error fetching products', error);
      }
    );
  }

  applyFilters(): void {
    if (!this.validateCategory()) {
      this.errorMessage = "Category name cannot contain special characters.";
      return;
    } else {
      this.errorMessage = null;
    }

    console.log(this.categoryName)

    this.filteredProducts = this.products.filter(product => {
      const matchesCategory = !this.categoryName || product.idCategorie.nom === this.categoryName;
      const matchesPriceRange = (!this.minPrice || product.price >= this.minPrice) &&
                                 (!this.maxPrice || product.price <= this.maxPrice);
      return matchesCategory && matchesPriceRange;
    });
  }

  resetFilters(): void {
    this.minPrice = undefined;
    this.maxPrice = undefined;
    this.categoryName = '';
    this.getProducts();
  }

  deleteProduct(id: string): void {
    this.productService.deleteProduct(id).subscribe(
      () => {
        this.products = this.products.filter(product => product.id !== id);
        this.applyFilters();
      },
      (error) => {
        console.error('Error deleting product', error);
      }
    );
  }

  buyProduct(product: any): void {
    if (product.quantity > 0) {

          this.cartService.addToCart(product._id,this.userId,1).subscribe(
            data => {
            this.showPopupNotification();
            setTimeout(() => {
              this.productAddedToCart = null;
            }, 5000);
          });
  
  
    } else {
      console.warn('Product quantity is already 0');
      this.showOutOfStockNotification();
    }
  }

  showPopupNotification(): void {
    console.log('showPopupNotification called');
    const popup = this.popupNotification.nativeElement;
    popup.classList.add('show');
    setTimeout(() => {
      popup.classList.remove('show');
    }, 3000);
  }

  showOutOfStockNotification(): void {
    console.log('showOutOfStockNotification called');
    const popup = this.outOfStockNotification.nativeElement;
    popup.classList.add('show');
    setTimeout(() => {
      popup.classList.remove('show');
    }, 3000);
  }

  validateAndAdjustPrices(): void {
    if (this.minPrice !== undefined && this.minPrice < 0) {
      this.minPrice = 0;
    }
    if (this.maxPrice !== undefined && this.maxPrice < 0) {
      this.maxPrice = 0;
    }
    this.applyFilters();
  }
}
