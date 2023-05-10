import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientService } from '../client.service';
import { Client } from '../client';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
 
  clientForm: Client = {
    id: 0,
    name: "",
    surname: "",
    address: "",
    phone: ""
    };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private clientService: ClientService,
  ) {}

  ngOnInit(): void {
    
    this.route.paramMap.subscribe((param) => {
      var id = Number(param.get('id'));
      this.getById(id);
    });

  }


  getById(id: number) {
    this.clientService.getById(id).subscribe((data) => {
      this.clientForm = data;
    });
  }

  update() {
    this.clientService.update(this.clientForm).subscribe({
      next: (data) => {
        this.router.navigate(['/products/home']);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

}
