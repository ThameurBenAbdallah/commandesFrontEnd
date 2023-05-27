import { Client } from '../client';
import { ClientService } from '../client.service';
import { ActivatedRoute, Router } from '@angular/router';
import {AfterViewInit, Component, DoCheck, ViewChild} from '@angular/core';
import {MatSort, Sort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { LiveAnnouncer } from '@angular/cdk/a11y';

declare var window: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  allClients: Client[] = [];
  deleteModal: any;
  idTodelete: number = 0;


  constructor(
              private clientService: ClientService, 
              private route: ActivatedRoute,
              private router:Router,private _liveAnnouncer: LiveAnnouncer){ 
                this.sort=new MatSort
               }


  @ViewChild(MatSort) sort: MatSort;
  
  ngAfterViewInit(): void {
  this.dataSource.sort = this.sort;    
  }
 
  ngOnInit(): void {
   this.get();  
  //  console.log(this.allClients)   
   }

  get() {
    this.clientService.get().subscribe((data) => {
      
      this.allClients = data;
      console.log(this.allClients)
      //this.dataSource = new MatTableDataSource(this.allClients);

    });
  }
  ngDoCheck() {
    if (this.allClients.length>0) {
      this.dataSource = new MatTableDataSource(this.allClients);
      
 
    }
  }

  openDeleteModal(id: number) {
    this.idTodelete = id;
    this.deleteModal.show();
  }

  delete() {
    this.clientService.delete(this.idTodelete).subscribe({
      next: (data) => {
        this.allClients = this.allClients.filter(_ => _.id != this.idTodelete)
        this.deleteModal.hide();
      },
    });
  }

  dataSource = new MatTableDataSource(this.allClients);

  displayedColumns: string[] = ['id', 'name', 'surname', 'address', 'phone', 'edit','delete'];
 

}