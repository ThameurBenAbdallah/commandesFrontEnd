import { Component, OnInit } from '@angular/core';
import { Client } from '../client';
import { Router } from '@angular/router';
import { ClientService } from '../client.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit{

  
  clientForm: Client = {
    id: 0,
    name: "",
    surname: "",
    address: "",
    phone: ""
    };
    
    clients : Client[] = [];

  constructor(
    private clientService: ClientService,
 
    private router: Router
  ) {}

  ngOnInit(): void {
    
  }
 
  
  create() {
    console.log(this.clientForm)
    this.clientService.create(this.clientForm).subscribe({
      next: (data) => {
        console.log(data)
        this.router.navigate(['/client']);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}


