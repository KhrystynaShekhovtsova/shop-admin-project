import { Component, OnInit, Input } from '@angular/core';
import { User } from '../../user.model';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.scss'],
})
export class UserItemComponent implements OnInit {
  @Input() user: User;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  onShowDetails(uuid: string): void {
    this.router.navigate(['/users/user-details'], {
      queryParams: { uuid: uuid },
    });
  }
}
