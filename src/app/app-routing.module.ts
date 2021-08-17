import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './admin-login/login/login.component';
import { ForgotPassswordComponent } from './admin-login/forgot-passsword/forgot-passsword.component';
import { RegisterUserComponent } from './admin-login/register-user/register-user.component';
import { MainComponent } from './admin-login/main/main.component';
import { LayoutComponent } from './logged-in-user/layout/layout.component';
import { KycApprovalComponent } from './logged-in-user/kyc-approval/kyc-approval.component';
import { DashboardComponent } from './logged-in-user/dashboard/dashboard.component';
import { AuthService } from './services/auth.service';

const routes: Routes = [

  { path: '', redirectTo: 'main', pathMatch: 'full' },
  {
    path: 'main', component: MainComponent,
    children: [
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: 'login', component: LoginComponent },
      { path: 'forgot-password', component: ForgotPassswordComponent },
      { path: 'regsiter', component: RegisterUserComponent },
    ]
  },

  {
    path: 'admin',
    canActivate: [AuthService],
    component: LayoutComponent,
    children: [
      { path: '', redirectTo: 'kyc-approval', pathMatch: 'full' },
      { path: 'kyc-approval', component: KycApprovalComponent },
      { path: 'dashboard', component: DashboardComponent },
    ]},
    // {path: '**', component : PageNotFoundComponent },
    // {path: '**', component : AdminLoginComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
