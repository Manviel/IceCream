export enum Paths {
  Home = '/',
  Products = '/products',
  Privacy = '/privacy',
  Profile = '/profile',
  Relax = '/dev',
}

export enum Pages {
  Home = 'Home',
  Products = 'For You',
  Privacy = 'Privacy',
  Profile = 'Profile',
}

export type Entity = {
  [key: string]: number | string;
};

export interface SegregationType {
  title: string;
  description: string;
}

export interface ListItemGen<T> {
  label: string;
  value: T;
}

export interface IDType {
  id: string;
}

export interface DarkThemeType {
  isDark?: boolean;
}
