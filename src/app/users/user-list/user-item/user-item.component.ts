import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { User } from '../../user.model';

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.scss'],
})
export class UserItemComponent implements OnInit {
  @Input() user: any;
  @Output() showDetails = new EventEmitter<void>();

  constructor() {}

  ngOnInit(): void {}

  onShowDetails(): void {
    console.log('clicked!');
    this.showDetails.emit();
  }
}
