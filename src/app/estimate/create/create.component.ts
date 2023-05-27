import { Component, Inject, OnInit } from '@angular/core';
import { EstimateLine } from '../estimate-line';
import { Product } from 'src/app/product/product';
import { Client } from 'src/app/client/client';
import { ClientService } from 'src/app/client/client.service';
import { Observable, of } from 'rxjs';
import { FormControl } from '@angular/forms';
import { Estimate } from '../estimate';
import { EstimateService } from '../estimate.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  // Create an array of estimate lines(création ligne de devis)


  estimateLines: EstimateLine[] = [];

  //Initialize the Estimate object
  estimate : Estimate= {

    id: 0,
    client: {
      id: 0,
      name: '',
      surname: '',
      address: '',
      phone: ''
    },
    estimateDate: new Date(Date.now()),
    estimateLines: this.estimateLines
              
}


  //Initialize the EstimateLine object
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
    discount: 0,
    estimateLineQuantity: 0
  };

  clients: Client[] = [];
  filteredClients!: Observable<Client[]>;
  searchQuery: string = '';
  selectedClient!: Client;

  client: Client = {
    id: 0,
    name: '',
    surname: '',
    address: '',
    phone: ''
  }




  constructor(private clientService: ClientService, private estimateService: EstimateService) {}

  onClientSelected(selected: Client) {
    this.estimate.client = selected ;

  }

// Load the clients from the client service
  loadClients(): void {
    this.clientService.get().subscribe(
      (data) => {
        this.clients = data;
        this.filteredClients = of(data);
      }
    );
  }

  //Search for appropriate client by the livesearch autocomplete
  filterClients(searchTerm: Event): void {
    const input = event?.target as HTMLInputElement;
    const inputValue = input.value;
    console.log(inputValue)
    this.filteredClients = of(this.clients.filter(client =>
      client.name.toLowerCase().includes(inputValue.toLowerCase())
    ))
  }



  

  ngOnInit(): void {

    this.loadClients()

  }

  displayFn(client: Client): string {
    return client && client.name ? client.name : '';
  }

// Add an estimate line the array (ajouter une ligne de devis au tableau)
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
     
      
      discount: 0,
      estimateLineQuantity: 1
    };

    // Add the new estimate line to the array
    this.estimateLines.push(newLine);
  }


// Handel the delete event from the child componenet of create EstimateLine (manupiler l'évenement emis du composant fils de la suppression )
  handleEstimateLineDeleted(index: number): void {
    this.estimateLines.splice(index, 1);
  }


//Calculate the total amount fo all articles and their quantities
  calculateTotalQuantity(): number {
    let total = 0;
    for (const line of this.estimateLines) {
      total += line.estimateLineQuantity*line.product.price*(1-line.discount/100)*(1+line.product.tax/100);
    }
    return total;
  }

  verifier(){

    console.log(this.estimateLines)

  
  }



  createEstimate(  ): void {
    // Update the etimate lines

    this.estimate.estimateLines= this.estimateLines;
    console.log(JSON.stringify(this.estimate))
   
    // Call the estimateService to create the estimate
    this.estimateService.create(this.estimate)
    .subscribe({
      next: (response: Estimate) => {
        console.log('Estimate created successfully:', response);
      
      },
      error: (error: any) => {
        console.error('Error creating estimate:', error);
        console.log(JSON.stringify(this.estimate))
       
      }
    });
  }
  




}
