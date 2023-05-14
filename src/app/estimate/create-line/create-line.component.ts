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
    //@Output() estimateLineChanged = new EventEmitter<{lineIndex : number, estimateLine: EstimateLine}>();
    @Output() estimateLineDeleted = new EventEmitter<number>();
    products: Product[] = [];
    filteredOptions!: Observable<Product[]>;
    searchQuery: string = '';
    selectedProduct!: Product;
    myControl = new FormControl('');

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
    //this.productSelected.emit({ lineIndex: this.index, product: selected });
  }
 /*updateEstimateLine(): void {
      this.estimateLineChanged.emit({lineIndex: this.index, estimateLine : this.estimateLine});
    }*/
    /*selectProduct(e: any) {
      if (e.target.checked)
      this.estimateLine = { ...this.estimateLine, product: e.target.value };
      console.log(this.estimateLine);
      this.updateEstimateLine();
    }*/

    /*onOptionSelected(e: MatAutocompleteSelectedEvent): void {
      const selectedOption = e.option.value;
      this.estimateLine = { ...this.estimateLine, product: selectedOption };
      console.log(this.estimateLine);
      this.updateEstimateLine();
    }*/

  /*
  addEstimateLine(): void {

    const newEstimateLine: EstimateLine = this.estimateLineForm;
    this.estimateLineAdded.emit(newEstimateLine);
  }*/
/*
  searchProducts(): void {
    this.productService.search(this.searchQuery).subscribe({
      next: (data) => {
        const filteredProducts = data;
        this.filteredProducts = filteredProducts;
      },
      error: (error) => {
        alert("There was an error finding products");
        console.log(error);
      }
    });
  }



  onSearchChange(): void {
  clearTimeout(this.searchTimeout);
  this.searchTimeout = setTimeout(() => {
    this.searchProducts();
  }, 300);
}*/
 /*onSearchChange(): void {

    this.filterProducts(this.searchQuery)
  }
  */



}


