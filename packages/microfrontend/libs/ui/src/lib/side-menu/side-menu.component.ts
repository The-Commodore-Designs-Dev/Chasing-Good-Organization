import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'ui-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss'],
})
export class SideMenuComponent implements OnInit {
  sidebarVisible!: boolean;
  items!: MenuItem[];

  ngOnInit() {
    this.items = [
      {
        label: 'Submissions',
        icon: ''
      },
      {
        label: 'Users',
        icon: ''
      }
    ]
  }
}
