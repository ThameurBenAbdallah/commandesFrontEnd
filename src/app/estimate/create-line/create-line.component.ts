import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { EstimateLine } from '../estimate-line';
import { Product } from 'src/app/product/product';
import { ProductService } from 'src/app/product/product.service';
import { FormControl } from '@angular/forms';
import { Observable, of } from 'rxjs';





@Component({
  selector: 'app-create-line',
  templateUrl: './create-line.component.html',
  styleUrls: ['./create-line.component.css']
}
)
export class CreateLineComponent implements OnInit{

    @Input() estimateLine!: EstimateLine ;
    @Input() index!: number ;
    @Output() estimateLineDeleted = new EventEmitter<number>();
    products: Product[] = [];
    filteredOptions!: Observable<Product[]>;
    searchQuery: string = '';
    selectedProduct!: Product;
  

    constructor(private productService: ProductService) {}

    loadProducts(): void {
      // Load the products from the product service
      this.productService.get().subscribe(
        (data) => {
          this.products = data;
          this.filteredOptions= of(data);
        }
      );
    }

    ngOnInit(): void {
      this.loadProducts();
      console.log(this.index);
    }



    deletEstimateLine(): void {
      alert(this.selectedProduct)
      this.estimateLineDeleted.emit(this.index);
    }
   
    displayFn(product: Product): string {
      return product && product.name ? product.name : '';
    }

    filterProducts(searchTerm: Event): void {
      const input = event?.target as HTMLInputElement;
      const inputValue = input.value;
      console.log(inputValue)
      this.filteredOptions = of(this.products.filter(product =>
        product.name.toLowerCase().includes(inputValue.toLowerCase())
      ))
    }
    
  onProductSelected(selected: Product) {
    this.estimateLine.product = selected;

  }
 

}


