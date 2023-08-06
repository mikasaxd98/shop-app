import { NavItem } from '../interfaces/nav-item';

export const NAV_ITEMS: NavItem[] = [{
  title: 'Home',
  icon: 'bi bi-house',
  route: '/',
  position: 1,
},
  {
    title: 'Category',
    route: '',
    icon: '',
    position: 2,
    children: [
      {
        title: 'phones',
        icon: 'bi bi-phone',
        route: 'category/phones',
        position: 1
      },
      {
        title: 'computers',
        icon: 'bi bi-laptop',
        route: 'category/computers',
        position: 2
      }
    ]
  },
  {
    title: 'Settings',
    icon: 'bi bi-gear',
    route: 'settings',
    position: 3
  }];
