import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { AdminUser } from '../admin-user.model';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  loggedUser: AdminUser;
  private loggedUserSubscription: Subscription;
  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.authService.user.subscribe((user) => {
      this.loggedUser = user;
      console.log('LOGGED USER', user);
    });
  }

  onLogout() {
    this.authService.logout();
  }

  ngOnDestroy() {
    this.loggedUserSubscription.unsubscribe();
  }
}
