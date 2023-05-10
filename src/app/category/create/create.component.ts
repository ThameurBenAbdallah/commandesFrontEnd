import { Component, OnInit } from '@angular/core';
import { Category } from '../category';
import { Router } from '@angular/router';
import { CategoryService } from '../category.service';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  categoryForm: Category = {
    id: 0,
    name: '',
  
  };
 
  constructor(private categoryService : CategoryService,
    private router:Router) {}
 
  ngOnInit(): void {}
 
  create(){
    alert(JSON.stringify(this.categoryForm))
    this.categoryService.create(this.categoryForm)
    .subscribe({
      next:(data) => {
        this.router.navigate(["/category"])
      },
      error:(err) => {
        console.log(err);
      }
    })
  }
}

