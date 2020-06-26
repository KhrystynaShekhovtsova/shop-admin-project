import { Component, OnInit } from '@angular/core';
import { AdminUser } from '../app/admin-user.model';
import { from } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  loggedUser: AdminUser;

  constructor() {
    this.loggedUser = {
      login: 'admin',
      imageUrl: 'assets/images/user_photo.png',
    };
  }
}
