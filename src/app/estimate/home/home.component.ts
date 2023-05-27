import { Component, OnInit } from '@angular/core';
import { EstimateService } from '../estimate.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Estimate } from '../estimate';

declare var window: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  allEstimates: Estimate[] = [];
  deleteModal: any;
  idTodelete: number = 0;


  constructor(private estimateService: EstimateService, private route: ActivatedRoute,
    private router:Router,){}

  ngOnInit(): void {
    this.get();
    
    
    this.deleteModal = new window.bootstrap.Modal(
      document.getElementById('deleteModal')
    );
 
    
  }

  get() {
    this.estimateService.get().subscribe((data) => {
      this.allEstimates = data;
    });
  }

  openDeleteModal(id: number) {
    this.idTodelete = id;
    this.deleteModal.show();
    console.log(JSON.stringify(this.allEstimates[0]));
  }

  delete() {
    
    this.estimateService.delete(this.idTodelete).subscribe({
      next: (data) => {
        this.allEstimates = this.allEstimates.filter(_ => _.id != this.idTodelete)
        this.deleteModal.hide();
        
      },
    });
  }

}

