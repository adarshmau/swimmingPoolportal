import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppCustomerRoutingModule } from './app-customer-routing.module';
import { SearchspComponent } from './searchsp/searchsp.component';
import { BookspComponent } from './booksp/booksp.component';
import { MybookingsComponent } from './mybookings/mybookings.component';


@NgModule({
  declarations: [
    SearchspComponent,
    BookspComponent,
    MybookingsComponent
  ],
  imports: [
    CommonModule,
    AppCustomerRoutingModule
  ]
})
export class AppCustomerModule { }
