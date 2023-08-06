export interface NavItem {
  title: string;
  icon: string;
  route: string;
  position: number;
  children?: NavItem[]
}
