import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppOwnerRoutingModule } from './app-owner-routing.module';
import { AddspComponent } from './addsp/addsp.component';
import { ListspComponent } from './listsp/listsp.component';
import { ListallbookingComponent } from './listallbooking/listallbooking.component';


@NgModule({
  declarations: [
    AddspComponent,
    ListspComponent,
    ListallbookingComponent
  ],
  imports: [
    CommonModule,
    AppOwnerRoutingModule
  ]
})
export class AppOwnerModule { }
