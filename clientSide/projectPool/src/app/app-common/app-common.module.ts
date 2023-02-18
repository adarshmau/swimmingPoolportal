import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms' ;
import { AppCommonRoutingModule } from './app-common-routing.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AppAdminModule } from '../app-admin/app-admin.module';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    AppCommonRoutingModule,
    AppAdminModule,
    ReactiveFormsModule
  ],
  exports:[
    HeaderComponent,
    FooterComponent
  ]
})
export class AppCommonModule { }
