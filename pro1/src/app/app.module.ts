import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FeereportComponent } from './feereport/feereport.component';
import { HomeComponent } from './home/home.component';
import { AddstudentComponent } from './addstudent/addstudent.component';
import { ViewstudentComponent } from './viewstudent/viewstudent.component';
import { DuefeeComponent } from './duefee/duefee.component';
import { SearchstudentComponent } from './searchstudent/searchstudent.component';
import { LogoutComponent } from './logout/logout.component';
import { Admin1Component } from './admin1/admin1.component';
import { AccountantComponent } from './accountant/accountant.component';
import { HomeacComponent } from './homeac/homeac.component';
import { AddaccountantComponent } from './addaccountant/addaccountant.component';
import { ViewaccountantComponent } from './viewaccountant/viewaccountant.component';
import { Logout1Component } from './logout1/logout1.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Feereaport1Component } from './feereaport1/feereaport1.component';

@NgModule({
  declarations: [
    AppComponent,
    FeereportComponent,
    HomeComponent,
    AddstudentComponent,
    ViewstudentComponent,
    DuefeeComponent,
    SearchstudentComponent,
    LogoutComponent,
    Admin1Component,
    AccountantComponent,
    HomeacComponent,
    AddaccountantComponent,
    ViewaccountantComponent,
    Logout1Component,
    Feereaport1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,ReactiveFormsModule,HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
