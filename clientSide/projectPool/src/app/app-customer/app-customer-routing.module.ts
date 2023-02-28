import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PreLoginGuardService } from '../app-common-service/pre-login-guard.service';
import { BookspComponent } from './booksp/booksp.component';
import { MybookingsComponent } from './mybookings/mybookings.component';
import { SearchspComponent } from './searchsp/searchsp.component';

const routes: Routes = [
  {path:"booksp",component:BookspComponent, canActivate : [PreLoginGuardService]},
  {path:"searchsp",component:SearchspComponent, canActivate : [PreLoginGuardService]},
  {path:"mybookings",component:MybookingsComponent, canActivate : [PreLoginGuardService]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppCustomerRoutingModule { }
