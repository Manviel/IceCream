export enum Paths {
  Home = '/',
  Products = '/products',
  Privacy = '/privacy',
  Profile = '/profile',
  Relax = '/profile/dev',
  SignIn = '/sign-in',
  SignUp = '/register',
  ForgetAccount = '/delete-account',
  Forbidden = '/403',
  Bag = '/add-to-bag'
}

export const Pages: { [K in keyof typeof Paths]: string } = {
  Home: 'Home',
  Products: 'For You',
  Privacy: 'Privacy',
  Profile: 'Profile',
  Relax: 'Keep calm',
  SignIn: 'Sign In',
  SignUp: 'Sign Up',
  ForgetAccount: 'Delete account',
  Forbidden: 'Access Denied',
  Bag: 'Bag'
};

export type Entity<T> = {
  [key: string]: T;
};

export interface ISegregation<T> {
  title: string;
  description: T;
}

export interface IDType {
  id: string;
}

export interface IDarkTheme {
  isDark?: boolean;
}

export interface IAnchor {
  href: string;
  end?: boolean;
}
