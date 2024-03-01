import { render } from 'solid-js/web';
import { Router, Route } from '@solidjs/router';
import { lazy } from 'solid-js';

import App from './App';

import { NewsProvider } from './services/store';
import { Paths } from './models';

const Home = lazy(() => import('./pages/Home'));
const Profile = lazy(() => import('./pages/Profile'));
const NotFound = lazy(() => import('./pages/NotFound'));
const Products = lazy(() => import('./pages/Products'));
const Privacy = lazy(() => import('./pages/Privacy'));
const Relax = lazy(() => import('./pages/Relax'));
const SignIn = lazy(() => import('./pages/SignIn'));
const SignUp = lazy(() => import('./pages/SignUp'));
const ForgetAccount = lazy(() => import('./pages/ForgetAccount'));
const Forbidden = lazy(() => import('./pages/NotFound/Forbidden'));

render(
  () => (
    <NewsProvider>
      <Router root={App}>
        <Route path={Paths.Home} component={Home} />

        <Route path={Paths.Products} component={Products} />

        <Route path={Paths.Profile} component={Profile} />

        <Route path={Paths.Privacy} component={Privacy} />

        <Route path={Paths.Relax} component={Relax} />

        <Route path={Paths.SignIn} component={SignIn} />

        <Route path={Paths.SignUp} component={SignUp} />

        <Route path={Paths.ForgetAccount} component={ForgetAccount} />

        <Route path={Paths.Forbidden} component={Forbidden} />

        <Route path='*' component={NotFound} />
      </Router>
    </NewsProvider>
  ),
  document.getElementById('root') as HTMLElement
);
