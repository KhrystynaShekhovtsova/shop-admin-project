import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersComponent } from './users.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserItemComponent } from './user-list/user-item/user-item.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UsersDataService } from './users-data.service';
import { RouterModule } from '@angular/router';
import { UsersRoutingModule } from './users-routing.module';

@NgModule({
  declarations: [
    UsersComponent,
    UserListComponent,
    UserItemComponent,
    UserDetailsComponent,
  ],
  imports: [RouterModule, CommonModule, UsersRoutingModule],
  providers: [UsersDataService],
})
export class UsersModule {}
