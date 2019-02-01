import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from "./login/login.component";
import { DashboardComponent } from "../app/pages/dashboard/dashboard.component";
import { UserprofileComponent } from "./pages/userprofile/userprofile.component";
import { UsermanagementComponent } from "./pages/usermanagement/usermanagement.component";

const routes: Routes = [
  {path: '', component: LoginComponent, data: {message: 'Login Page'}},
  {path: 'login', component: LoginComponent, data: {message: 'Login Page'}},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'userprofile', component: UserprofileComponent},
  {path: 'usermanagement', component: UsermanagementComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
