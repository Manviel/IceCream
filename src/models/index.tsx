export enum ChartColors {
  Blue = '#007AFF',
  Green = '#00e396',
  Purple = '#b25fea',
  Neon = '#04DE71',
}

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
