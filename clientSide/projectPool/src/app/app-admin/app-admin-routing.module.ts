import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostLoginGuardService } from '../app-common-service/post-login-guard.service';
import { PreLoginGuardService } from '../app-common-service/pre-login-guard.service';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { MyprofileComponent } from './myprofile/myprofile.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {path:"login",component:LoginComponent, canActivate : [PostLoginGuardService]},
  {path:"signup",component:SignupComponent, canActivate : [PostLoginGuardService]},
  {path:"forgotpassword",component:ForgotpasswordComponent, canActivate : [PostLoginGuardService]},
  {path:"myprofile", component:MyprofileComponent, canActivate : [PreLoginGuardService]},
  {path:"changepassword", component:ChangepasswordComponent, canActivate : [PreLoginGuardService]},
  {path:"logout",component:LogoutComponent, canActivate : [PreLoginGuardService]},
  {path:"passwordReset/:email/:activationCode",component:ResetpasswordComponent, canActivate : [PostLoginGuardService]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppAdminRoutingModule { }
