import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddspComponent } from './addsp/addsp.component';
import { ListallbookingComponent } from './listallbooking/listallbooking.component';
import { ListspComponent } from './listsp/listsp.component';

const routes: Routes = [
  
  {path:"addsp",component:AddspComponent},
  {path:"listallbookings",component:ListallbookingComponent},
  {path:"listsp",component:ListspComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppOwnerRoutingModule { }
