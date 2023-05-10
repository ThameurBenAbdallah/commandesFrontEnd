import { Component, OnInit } from '@angular/core';
import { EstimateLine } from '../estimate-line';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
 
 

  ngOnInit(): void {
   
  }

  line:  EstimateLine = {
    id: 0,
    
    product: {
      id: 0,
      name: '',
      description: '',
      tax: 0,
      price: 0,
      category: {
        id: 0,
        name: '',
      },
      unitsInStock: 0
    },
    estimate : {
      id : 0,
      client : {
        id:0,
        name : "",
        surname : "",
        address :"",
        phone : ""
      },
      estimateDate : new Date(Date.now())
    } ,
    discount: 0,
    quantity: 0
}
    ;

    estimateLines: EstimateLine[] = [];

    addEstimateLine(): void {
      // Create a new instance of the estimate line
      const newLine: EstimateLine ={
        id: 0,
        
        product: {
          id: 0,
          name: '',
          description: '',
          tax: 0,
          price: 0,
          category: {
            id: 0,
            name: '',
          },
          unitsInStock: 0
        },
        estimate : {
          id : 0,
          client : {
            id:0,
            name : "",
            surname : "",
            address :"",
            phone : ""
          },
          estimateDate : new Date(Date.now())
        } ,
        discount: 0,
        quantity: 0
    };
  
      // Add the new estimate line to the array
      this.estimateLines.push(newLine);
    }
    verifier():void{
      alert(this.estimateLines.at(0)?.quantity)
    }
  
    handleEstimateLineChanged(updatedLine: EstimateLine): void {

      // Update the corresponding line in the array
      const index = this.estimateLines.findIndex(line => line === updatedLine);
      if (index !== -1) {
        this.estimateLines[index] = updatedLine;
      }
    }
    handleEstimateLineDeleted(index: number): void {
      this.estimateLines.splice(index, 1);
    }
}
