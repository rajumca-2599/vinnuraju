import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountantComponent } from './accountant/accountant.component';
import { AddaccountantComponent } from './addaccountant/addaccountant.component';
import { AddstudentComponent } from './addstudent/addstudent.component';
import { AdminGuard } from './admin.guard';
import { Admin1Guard } from './admin1.guard';
import { Admin1Component } from './admin1/admin1.component';
import { DuefeeComponent } from './duefee/duefee.component';
import { Feereaport1Component } from './feereaport1/feereaport1.component';
import { FeereportComponent } from './feereport/feereport.component';
import { HomeComponent } from './home/home.component';
import { HomeacComponent } from './homeac/homeac.component';
import { LogoutComponent } from './logout/logout.component';
import { Logout1Component } from './logout1/logout1.component';
import { SearchstudentComponent } from './searchstudent/searchstudent.component';
import { ViewaccountantComponent } from './viewaccountant/viewaccountant.component';
import { ViewstudentComponent } from './viewstudent/viewstudent.component';

const routes: Routes = [{path:'home',component:HomeComponent},
{path:'admin1', canActivate:[AdminGuard], component:Admin1Component,children:[{path:'feereport',component:FeereportComponent},
{path:'homeac',component:HomeacComponent},{path:'addaccountant/:id',component:AddaccountantComponent},
{path:'addaccountant',component:AddaccountantComponent},
{path:'viewaccountant',component:ViewaccountantComponent},
{  path:"logout1",component:Logout1Component}]},
{path:'accountant',canActivate:[Admin1Guard] , 
component:AccountantComponent,children:[{path:'feereport',component:Feereaport1Component},
{path:'feereport',component:FeereportComponent},
{path:'addstudent',component:AddstudentComponent},
{path:'viewstudent',component:ViewstudentComponent},
{path:'searchstudent',component:SearchstudentComponent},
{path:'logout',component:LogoutComponent},
{path:'duefee',component:DuefeeComponent}]},
{path:'',redirectTo:'home',pathMatch:'full'}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
