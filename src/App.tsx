import { Component, lazy, Suspense } from 'solid-js';
import { Routes, Route, NavLink } from '@solidjs/router';

import { SuperEllipse } from './models/config';

import { Skeleton } from './components/Loader';

import FlameIcon from './assets/icons/flame.svg';
import SquareTextIcon from './assets/icons/square-text.svg';
import PersonFinderIcon from './assets/icons/person-finder.svg';
import LockIcon from './assets/icons/lock.svg';

const Home = lazy(() => import('./pages/Home'));
const Profile = lazy(() => import('./pages/Profile'));
const NotFound = lazy(() => import('./pages/NotFound'));
const Products = lazy(() => import('./pages/Products'));
const Privacy = lazy(() => import('./pages/Privacy'));
const Expert = lazy(() => import('./pages/Profile/Expert'));

const App: Component = () => (
  <div class='flex col items-center'>
    <nav
      class='fixed-bottom dock depth content-full flex justify-between'
      aria-label='Tabs'
    >
      <NavLink href='/' end aria-label='Home' class={SuperEllipse}>
        <SquareTextIcon />
      </NavLink>

      <NavLink href='/products' aria-label='Products' class={SuperEllipse}>
        <FlameIcon />
      </NavLink>

      <NavLink href='/privacy' aria-label='Privacy' class={SuperEllipse}>
        <LockIcon />
      </NavLink>

      <NavLink href='/profile' aria-label='Profile' class={SuperEllipse}>
        <PersonFinderIcon />
      </NavLink>
    </nav>

    <Suspense fallback={<Skeleton />}>
      <Routes>
        <Route path='/' element={<Home />} />

        <Route path='/products' element={<Products />} />

        <Route path='/profile' element={<Profile />} />
        <Route path='/profile/expert' element={<Expert />} />

        <Route path='/privacy' element={<Privacy />} />

        <Route path='*' element={<NotFound />} />
      </Routes>
    </Suspense>
  </div>
);

export default App;
