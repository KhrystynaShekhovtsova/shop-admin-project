import { Component, OnInit } from '@angular/core';
import { User } from '../user.model';
import { UsersDataService } from '../users-data.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent implements OnInit {
  users: User[] = null;
  constructor(private usersDataService: UsersDataService) {}

  getUsersList() {
    this.usersDataService.getUsers().subscribe((data: any[]) => {
      this.users = data.map((item) => {
        return {
          login: item.login.username,
          name: `${item.name.title} ${item.name.first} ${item.name.last}`,
          imageUrl: item.picture.large,
          uuid: item.login.uuid,
        };
      });
    });
  }

  ngOnInit(): void {
    this.getUsersList();
  }
}
