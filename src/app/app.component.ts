import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private authService: AuthService) {}
  ngOnInit() {
    this.authService.autologin();
  }
}
