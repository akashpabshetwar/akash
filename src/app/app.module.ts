import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './admin-login/login/login.component';
import { ForgotPassswordComponent } from './admin-login/forgot-passsword/forgot-passsword.component';
import { RegisterUserComponent } from './admin-login/register-user/register-user.component';
import { MainComponent } from './admin-login/main/main.component';
import { DashboardComponent } from './logged-in-user/dashboard/dashboard.component';
import { LayoutComponent } from './logged-in-user/layout/layout.component';
import { KycApprovalComponent } from './logged-in-user/kyc-approval/kyc-approval.component';
import { HeaderComponent } from './logged-in-user/layout/header/header.component';
import { MenuComponent } from './logged-in-user/layout/menu/menu.component';
import { FooterComponent } from './logged-in-user/layout/footer/footer.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ForgotPassswordComponent,
    RegisterUserComponent,
    MainComponent,
    DashboardComponent,
    LayoutComponent,
    KycApprovalComponent,
    HeaderComponent,
    MenuComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
