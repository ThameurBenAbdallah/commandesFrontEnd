import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo:'/category', pathMatch: 'full'},
  {path: 'category', loadChildren: () => import('./category/category.module').then(c => c.CategoryModule)},
  {path: 'products', loadChildren: () => import('./product/product.module').then(c => c.ProductModule)},
  {path: 'client', loadChildren: () => import('./client/client.module').then(c => c.ClientModule)},
  {path: 'estimate', loadChildren: () => import('./estimate/estimate.module').then(c => c.EstimateModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
