import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms' ;
import { AppCommonRoutingModule } from './app-common-routing.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AppAdminModule } from '../app-admin/app-admin.module';
import { AppOwnerModule } from '../app-owner/app-owner.module';
import { AppCustomerModule } from '../app-customer/app-customer.module';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    AppCommonRoutingModule,
    AppAdminModule,
    ReactiveFormsModule,
    AppOwnerModule,
    AppCustomerModule,
    HttpClientModule
  ],
  exports:[
    HeaderComponent,
    FooterComponent
  ]
})
export class AppCommonModule { }
