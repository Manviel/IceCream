export enum Paths {
  Home = '/',
  Products = '/products',
  Privacy = '/privacy',
  Profile = '/profile',
  Relax = '/dev',
  SignIn = '/sign-in',
  SignUp = '/register',
  ForgetAccount = '/delete-account',
}

export enum Pages {
  Home = 'Home',
  Products = 'For You',
  Privacy = 'Privacy',
  Profile = 'Profile',
  Relax = 'Keep calm',
  SignIn = 'Sign In',
  SignUp = 'Sign Up',
  ForgetAccount = 'Delete account',
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

export interface AnchorType {
  href: string;
  end?: boolean;
}
