import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgSelectModule } from '@ng-select/ng-select';
import { EstimateRoutingModule } from './estimate-routing.module';
import { HomeComponent } from './home/home.component';
import { EditComponent } from './edit/edit.component';
import { CreateComponent } from './create/create.component';
import { DetailComponent } from './detail/detail.component';
import { CreateLineComponent } from './create-line/create-line.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';






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
    FormsModule,
    NgSelectModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    ReactiveFormsModule ,
    MatInputModule,
    MatIconModule
  ]
})
export class EstimateModule { }
