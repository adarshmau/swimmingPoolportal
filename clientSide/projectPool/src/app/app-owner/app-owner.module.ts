import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppOwnerRoutingModule } from './app-owner-routing.module';
import { AddspComponent } from './addsp/addsp.component';
import { ListspComponent } from './listsp/listsp.component';
import { ListallbookingComponent } from './listallbooking/listallbooking.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AddspComponent,
    ListspComponent,
    ListallbookingComponent
  ],
  imports: [
    CommonModule,
    AppOwnerRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ]
})
export class AppOwnerModule { }
