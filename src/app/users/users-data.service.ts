import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { User } from './user.model';
import { from, Observable } from 'rxjs';

@Injectable()
export class UsersDataService {
  constructor(private http: HttpClient) {}

  getUsers(userId?: string): Observable<any> {
    return this.http.get('http://localhost:3000/users', {
      params: { uuid: userId },
    });
  }
}
