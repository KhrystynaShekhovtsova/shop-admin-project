import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { User } from '../user.model';
import { Subscription } from 'rxjs';
import { UsersDataService } from '../users-data.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss'],
})
export class UserDetailsComponent implements OnInit, OnDestroy {
  user: User = null;
  uuid: string = null;
  queryParamsSubscription: Subscription;

  constructor(
    private usersDataService: UsersDataService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.queryParamsSubscription = this.route.queryParams.subscribe(
      (params) => {
        this.uuid = params['uuid'];
      }
    );
    if (this.uuid.trim().length > 1) {
      this.getUserData(this.uuid);
    } else {
      this.router.navigate(['/users']);
    }
  }

  getUserData(uuid) {
    this.usersDataService.getUsers().subscribe((data) => {
      let userData = data.filter((item) => item.login.uuid === uuid)[0];
      this.user = {
        login: userData.login.username,
        name: `${userData.name.title} ${userData.name.first} ${userData.name.last}`,
        imageUrl: userData.picture.large,
        uuid: userData.login.uuid,
        registered: new Date(userData.registered.date),
        phone: userData.phone,
        email: userData.email,
        location: `${userData.location.city}, ${userData.location.state}, ${userData.location.country}`,
      };
    });
  }

  ngOnDestroy() {
    this.queryParamsSubscription.unsubscribe();
  }
}
