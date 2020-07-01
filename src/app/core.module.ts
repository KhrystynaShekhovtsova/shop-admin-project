import { NgModule } from '@angular/core';

import { AuthGuardService } from './auth/auth-guard.service';
import { AuthService } from './auth/auth.service';
import { UsersDataService } from './users/users-data.service';

@NgModule({
  providers: [AuthService, AuthGuardService, UsersDataService],
})
export class CoreModule {}
