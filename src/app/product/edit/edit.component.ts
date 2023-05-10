import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../product.service';
import { CategoryService } from 'src/app/category/category.service';
import { Category } from 'src/app/category/category';
import { Product } from '../product';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})

  export class EditComponent implements OnInit {
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
      private route: ActivatedRoute,
      private router: Router,
      private articleService: ProductService,
      private categorieservice: CategoryService
    ) {}
  
    ngOnInit(): void {
      this.route.paramMap.subscribe((param) => {
        var id = Number(param.get('id'));
        this.getById(id);
      });
      this.getCategories();
    }
    getCategories() {
      this.categorieservice.get().subscribe((data) => {
        this.allCategories = data;
      });
    }
  
    getById(id: number) {
      this.articleService.getById(id).subscribe((data) => {
        this.articleForm = data;
      });
    }
  
    update() {
      this.articleService.update(this.articleForm).subscribe({
        next: (data) => {
          this.router.navigate(['/products/home']);
        },
        error: (err) => {
          console.log(err);
        },
      });
    }

}
