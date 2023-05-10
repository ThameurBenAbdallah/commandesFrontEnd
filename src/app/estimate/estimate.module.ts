import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { EstimateRoutingModule } from './estimate-routing.module';
import { HomeComponent } from './home/home.component';
import { EditComponent } from './edit/edit.component';
import { CreateComponent } from './create/create.component';
import { DetailComponent } from './detail/detail.component';
import { CreateLineComponent } from './create-line/create-line.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HomeComponent,
    EditComponent,
    CreateComponent,
    DetailComponent,
    CreateLineComponent,
    
  ],
  imports: [
    CommonModule,
    EstimateRoutingModule,
    FormsModule
  ]
})
export class EstimateModule { }