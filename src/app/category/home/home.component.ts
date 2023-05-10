import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../category.service';
import { Category } from '../category';
import { ActivatedRoute, Router } from '@angular/router';
declare var window: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  allCategories: Category[] = [];
  deleteModal: any;
  idTodelete: number = 0;


  constructor(private categotyService: CategoryService,
              private route: ActivatedRoute,
              private router:Router,){}

  ngOnInit(): void {
    this.get();
    
    this.deleteModal = new window.bootstrap.Modal(
      document.getElementById('deleteModal')
    );
 
    
  }

  get() {
    this.categotyService.get().subscribe((data) => {
      this.allCategories = data;
    });
  }

  openDeleteModal(id: number) {
    this.idTodelete = id;
    this.deleteModal.show();
  }

  delete() {
    this.categotyService.delete(this.idTodelete).subscribe({
      next: (data) => {
        this.allCategories = this.allCategories.filter(_ => _.id != this.idTodelete)
        this.deleteModal.hide();
      },
    });
  }

}
