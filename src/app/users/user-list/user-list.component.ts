import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { User } from '../user.model';
import { UsersDataService } from '../users-data.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent implements OnInit {
  @Output() showUserDetails = new EventEmitter<User>();

  users: User[] = null;
  constructor(private usersDataService: UsersDataService) {}

  getUsersList() {
    this.usersDataService.getUsers().subscribe((data: any[]) => {
      console.log(data);
      this.users = data.map((item) => {
        return {
          login: item.login.username,
          name: `${item.name.title} ${item.name.first} ${item.name.last}`,
          imageUrl: item.picture.large,
          uuid: item.login.uuid,
          registered: new Date(item.registered.date),
          phone: item.phone,
          email: item.email,
          location: `${item.location.city}, ${item.location.state}, ${item.location.contry}`,
        };
      });
    });
  }

  ngOnInit(): void {
    this.getUsersList();
  }

  onShowUserDetails(user: User): void {
    this.showUserDetails.emit(user);
  }
}
