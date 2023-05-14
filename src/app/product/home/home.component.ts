import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';
import { ActivatedRoute, Router } from '@angular/router';
declare var window: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  allProducts: Product[] = [];
  deleteModal: any;
  idTodelete: number = 0;


  constructor(private productService: ProductService, private route: ActivatedRoute,
    private router:Router,){}

  ngOnInit(): void {
    this.get();

    this.deleteModal = new window.bootstrap.Modal(
      document.getElementById('deleteModal')
    );


  }

  get() {
    this.productService.get().subscribe((data) => {
      console.log(JSON.stringify(data))
      this.allProducts = data;
    });
  }

  openDeleteModal(id: number) {
    this.idTodelete = id;
    this.deleteModal.show();
  }

  delete() {
    this.productService.delete(this.idTodelete).subscribe({
      next: (data) => {
        this.allProducts = this.allProducts.filter(_ => _.id != this.idTodelete)
        this.deleteModal.hide();
      },
    });
  }

}
