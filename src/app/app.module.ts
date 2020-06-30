import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { UsersComponent } from './users/users.component';
import { UserListComponent } from './users/user-list/user-list.component';
import { UserItemComponent } from './users/user-list/user-item/user-item.component';
import { UserDetailsComponent } from './users/user-details/user-details.component';
import { LoginComponent } from './auth/login/login.component';
import { from } from 'rxjs';
import { ForgotPasswordComponent } from './auth/forgot-password/forgot-password.component';
import { AuthGuardService } from './auth-guard.service';
import { AuthService } from './auth.service';
import { UsersDataService } from './users/users-data.service';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    UsersComponent,
    UserListComponent,
    UserItemComponent,
    UserDetailsComponent,
    LoginComponent,
    ForgotPasswordComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [AuthService, AuthGuardService, UsersDataService],
  bootstrap: [AppComponent],
})
export class AppModule {}
