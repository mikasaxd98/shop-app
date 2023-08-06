import { Component } from '@angular/core';
import { NAV_ITEMS } from '../consts/nav-items';
import { NavItem } from '../interfaces/nav-item';

@Component( {
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
} )
export class NavbarComponent {
  public NAV_ITEMS: NavItem[] = NAV_ITEMS;

  constructor() {

    this.NAV_ITEMS.sort( ( a: NavItem, b: NavItem ) => a.position - b.position);
    this.NAV_ITEMS.forEach(item => {
      item?.children?.sort((a: NavItem, b: NavItem) => a.position - b.position)
    })
  }
}
