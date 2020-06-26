import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { User } from '../user.model';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent implements OnInit {
  @Output() showUserDetails = new EventEmitter<User>();

  users: User[] = [
    {
      login: 'user123',
      name: 'Ms Valerie Chavez',
      imageUrl: 'https://randomuser.me/api/portraits/women/68.jpg',
      uuid: 'f2cda612-4ac7-43db-b938-eb33b191a952',
      registered: new Date('2005-11-15T23:22:42.041Z'),
    },
    {
      login: 'user1234',
      name: 'Ms Jamie',
      imageUrl: 'https://randomuser.me/api/portraits/women/68.jpg',
      uuid: 'f2cda612-4ac7-43db-b938-eb33b191a952',
      registered: new Date('2005-11-15T23:22:42.041Z'),
    },
  ];
  constructor() {}

  ngOnInit(): void {}

  onShowUserDetails(user: User): void {
    this.showUserDetails.emit(user);
  }
}
