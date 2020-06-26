import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { UsersComponent } from './users/users.component';
import { UserListComponent } from './users/user-list/user-list.component';
import { UserItemComponent } from './users/user-list/user-item/user-item.component';
import { UserDetailsComponent } from './users/user-details/user-details.component';
import { LoginComponent } from './sign-in/login/login.component';
import { from } from 'rxjs';
import { ForgotPasswordComponent } from './sign-in/forgot-password/forgot-password.component';
import { AuthGuardService } from './auth-guard.service';
import { AuthService } from './auth.service';

const appRoutes: Routes = [
  { path: '', canActivate: [AuthGuardService], component: UsersComponent },
  {
    path: 'users/:userId',
    canActivate: [AuthGuardService],
    component: UserDetailsComponent,
  },
  { path: 'login', component: LoginComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },

  // redirect to home
  { path: '**', redirectTo: '' },
];

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
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [AuthService, AuthGuardService],
  bootstrap: [AppComponent],
})
export class AppModule {}
