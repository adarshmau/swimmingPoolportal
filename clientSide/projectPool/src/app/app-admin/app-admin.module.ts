import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms' ;
import { FormsModule } from '@angular/forms' ;
import { AppAdminRoutingModule } from './app-admin-routing.module';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';


@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent,
    ForgotpasswordComponent
  ],
  imports: [
    CommonModule,
    AppAdminRoutingModule,
    ReactiveFormsModule,
    FormsModule    
  ]
})
export class AppAdminModule { }
