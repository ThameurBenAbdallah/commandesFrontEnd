import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { EstimateLine } from '../estimate-line';
import { EstimateLineService } from '../estimate-line.service';
import { Router } from '@angular/router';
import { Product } from 'src/app/product/product';
import { ProductService } from 'src/app/product/product.service';

@Component({
  selector: 'app-create-line',
  templateUrl: './create-line.component.html',
  styleUrls: ['./create-line.component.css']
})
export class CreateLineComponent implements OnInit{
  ngOnInit(): void {
    //this.loadProducts();
    
  }

  @Input() estimateLine!: EstimateLine ;
  @Input() index!: number ;
  @Output() estimateLineChanged = new EventEmitter<EstimateLine>();
  @Output() estimateLineDeleted = new EventEmitter<number>();


  

/*

  products: Product[] = [];
  filteredProducts: Product[] = [];

  
  

   */

  /*constructor(
    private estimateLineService: EstimateLineService,
    private productService: ProductService,
 
    private router: Router
  ) {}

  loadProducts(): void {
    // Load the products from the product service
    this.productService.get().subscribe(
      (data) => {
        this.products = data;
      }
    );
    
  }
  filterProducts(searchTerm: string): void {
    this.filteredProducts = this.products.filter(product =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }
  
  create() {
    this.estimateLineService.create(this.estimateLineForm).subscribe({
      next: (data) => {
        
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  addEstimateLine(): void {
   
    const newEstimateLine: EstimateLine = this.estimateLineForm;
    this.estimateLineAdded.emit(newEstimateLine);
  }*/


  verifier():void{
    alert(this.estimateLine.quantity)
  }


  updateEstimateLine(): void {
    this.estimateLineChanged.emit(this.estimateLine);
  }
  deletEstimateLine(): void {
    this.estimateLineDeleted.emit(this.index);
  }

  
}


