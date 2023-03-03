export enum Paths {
  Home = '/',
  Products = '/products',
  Privacy = '/privacy',
  Profile = '/profile',
  Expert = '/profile/expert',
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
