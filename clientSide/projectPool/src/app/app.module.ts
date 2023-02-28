import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppAdminModule } from './app-admin/app-admin.module';
import { AppCommonModule } from './app-common/app-common.module';
import { ReactiveFormsModule } from '@angular/forms' ;
import { FormsModule } from '@angular/forms' ;
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { DatePipe } from '@angular/common';
import { RequestFilterInterceptorService } from './app-common-service/request-filter-interceptor.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppCommonModule,
    AppAdminModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    DatePipe
  ],
  providers: [
    {provide : HTTP_INTERCEPTORS, useClass : RequestFilterInterceptorService, multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
