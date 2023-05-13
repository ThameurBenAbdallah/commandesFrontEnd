import { Component, OnInit } from '@angular/core';
import { EstimateLine } from '../estimate-line';
import { Product } from 'src/app/product/product';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  line: EstimateLine = {
    id: 0,
    product: {
      id: 0,
      name: '',
      description: '',
      tax: 0,
      price: 0,
      category: {
        id: 0,
        name: ''
      },
      unitsInStock: 0
    },
    estimate: {
      id: 0,
      client: {
        id: 0,
        name: '',
        surname: '',
        address: '',
        phone: ''
      },
      estimateDate: new Date(Date.now())
    },
    discount: 0,
    quantity: 0
  };

  estimateLines: EstimateLine[] = [];

  ngOnInit(): void {}

  addEstimateLine(): void {
    // Create a new instance of the estimate line
    const newLine: EstimateLine = {
      id: 0,
      product: {
        id: 0,
        name: '',
        description: '',
        tax: 0,
        price: 0,
        category: {
          id: 0,
          name: ''
        },
        unitsInStock: 0
      },
      estimate: {
        id: 0,
        client: {
          id: 0,
          name: '',
          surname: '',
          address: '',
          phone: ''
        },
        estimateDate: new Date(Date.now())
      },
      discount: 0,
      quantity: 0
    };

    // Add the new estimate line to the array
    this.estimateLines.push(newLine);
  }

  verifier(): void {
    alert(this.estimateLines[this.estimateLines.length-1]?.product.name);
  }

  handleEstimateLineChanged(event: { lineIndex: number, estimateLine: EstimateLine }): void {
    // Update the corresponding line in the array
  
    if (event.lineIndex !== -1) {
      
      this.estimateLines = [
        ...this.estimateLines.slice(0, event.lineIndex),  
        event.estimateLine,                            
        ...this.estimateLines.slice(event.lineIndex + 1)  
      ];
    }
  }

  handleEstimateLineDeleted(index: number): void {
    this.estimateLines.splice(index, 1);
  }

  handleProductSelected(index: number, product: Product): void {
    this.estimateLines[index].product = product;
  }
}
