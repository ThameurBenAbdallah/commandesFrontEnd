import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product';
import { Category } from 'src/app/category/category';
import { CategoryService } from 'src/app/category/category.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit{

  allCategories: Category[] = [];
  articleForm: Product = {
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
  };

  constructor(
    private productService: ProductService,
    private categoryservice: CategoryService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getCategories();
  }
  getCategories() {
    this.categoryservice.get().subscribe((data) => {
      this.allCategories = data;
    });
  }
  create() {
    this.productService.create(this.articleForm).subscribe({
      next: (data) => {
        this.router.navigate(['/products']);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

}
