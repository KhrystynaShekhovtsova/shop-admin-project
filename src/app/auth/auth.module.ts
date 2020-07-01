import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { LoginComponent } from './login/login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { from } from 'rxjs';
import { AuthRoutingModule } from './auth-routing.module';

@NgModule({
  declarations: [LoginComponent, ForgotPasswordComponent],
  imports: [RouterModule, ReactiveFormsModule, CommonModule, AuthRoutingModule],
})
export class AuthModule {}
