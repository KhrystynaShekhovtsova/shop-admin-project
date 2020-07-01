import { HttpClient } from '@angular/common/http';
import { from, throwError, BehaviorSubject } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { AdminUser } from './admin-user.model';
import { Router } from '@angular/router';
import { User } from '../users/user.model';

const PREDEFINED_ADMIN = {
  login: 'admin',
  password: 'hAppytr33',
};

@Injectable({ providedIn: 'root' })
export class AuthService {
  loggedIn = false;
  user = new BehaviorSubject<AdminUser>(null);

  constructor(private http: HttpClient, private router: Router) {}

  isAuthentificated() {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.loggedIn);
      }, 600);
    });
    return promise;
  }

  login(login: string, password: string) {
    if (
      login !== PREDEFINED_ADMIN.login ||
      password !== PREDEFINED_ADMIN.password
    ) {
      return throwError('Please enter correct login and password');
    } else {
      return this.http.get<AdminUser>('http://localhost:3000/login').pipe(
        catchError((errorResp) => {
          let errorMessage = 'Something went wrong';
          // here the message can be changed depending on error
          return throwError(errorMessage);
        }),
        tap((respData) => {
          const expirationDate = new Date(new Date().getTime() + 86400000); // 86400000 is 1 day im ms
          const user = new AdminUser(
            respData.name,
            respData.imageUrl,
            respData.token,
            expirationDate
          );

          this.user.next(user);
          localStorage.setItem('currentUser', JSON.stringify(user));
        })
      );
    }
  }

  autologin() {
    const userData = JSON.parse(localStorage.getItem('currentUser'));
    if (!userData) {
      return;
    }

    const currentUser = new AdminUser(
      userData.name,
      userData.imageUrl,
      userData._token,
      new Date(userData._tokenExpirationDate)
    );

    if (currentUser.token) {
      this.loggedIn = true;
      this.user.next(currentUser);
    }
  }

  logout() {
    this.loggedIn = false;
    localStorage.removeItem('currentUser');
    this.user.next(null);
    this.router.navigate(['/login']);
  }
}
