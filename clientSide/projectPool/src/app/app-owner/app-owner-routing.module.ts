import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PreLoginGuardService } from '../app-common-service/pre-login-guard.service';
import { AddspComponent } from './addsp/addsp.component';
import { ListallbookingComponent } from './listallbooking/listallbooking.component';
import { ListspComponent } from './listsp/listsp.component';

const routes: Routes = [
  
  {path:"addsp",component:AddspComponent, canActivate : [PreLoginGuardService]},
  {path:"listallbookings",component:ListallbookingComponent, canActivate : [PreLoginGuardService]},
  {path:"listsp",component:ListspComponent, canActivate : [PreLoginGuardService]}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppOwnerRoutingModule { }
