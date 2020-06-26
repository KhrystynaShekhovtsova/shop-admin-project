import { Component, OnInit, Input } from '@angular/core';
import { AdminUser } from '../admin-user.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() user: AdminUser;
  constructor() {}

  ngOnInit(): void {}
}
