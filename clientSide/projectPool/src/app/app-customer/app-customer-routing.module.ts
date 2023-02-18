import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookspComponent } from './booksp/booksp.component';
import { MybookingsComponent } from './mybookings/mybookings.component';
import { SearchspComponent } from './searchsp/searchsp.component';

const routes: Routes = [
  {path:"booksp",component:BookspComponent},
  {path:"searchsp",component:SearchspComponent},
  {path:"mybookings",component:MybookingsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppCustomerRoutingModule { }
