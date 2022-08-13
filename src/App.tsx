import { Component, lazy, Suspense } from 'solid-js';
import { Routes, Route, NavLink } from 'solid-app-router';

import { SuperEllipse } from './components/Superellipse';
import { Skeleton } from './components/Loader';

import FlameIcon from './assets/icons/flame.svg';
import SquareTextIcon from './assets/icons/square-text.svg';
import PersonFinderIcon from './assets/icons/person-finder.svg';
import LockIcon from './assets/icons/lock.svg';

const Home = lazy(() => import('./pages/Home'));
const NewsFeed = lazy(() => import('./pages/NewsFeed'));
const Profile = lazy(() => import('./pages/Profile'));
const NotFound = lazy(() => import('./pages/NotFound'));
const Products = lazy(() => import('./pages/Products'));
const Privacy = lazy(() => import('./pages/Privacy'));

const App: Component = () => (
  <div class='flex col items-center'>
    <main class='app flex col content-full'>
      <Suspense fallback={<Skeleton />}>
        <Routes>
          <Route path='/' element={<Home />} />

          <Route path='/league' element={<NewsFeed />} />

          <Route path='/profile' element={<Profile />} />

          <Route path='/products' element={<Products />} />

          <Route path='/privacy' element={<Privacy />} />

          <Route path='*' element={<NotFound />} />
        </Routes>
      </Suspense>
    </main>

    <nav
      class='fixed-bottom dock content-full flex justify-between'
      aria-label='Tabs'
    >
      <NavLink href='/products' aria-label='Products' class={SuperEllipse}>
        <SquareTextIcon />
      </NavLink>

      <NavLink href='/league' aria-label='Leagues' class={SuperEllipse}>
        <FlameIcon />
      </NavLink>

      <NavLink href='/privacy' aria-label='Privacy' class={SuperEllipse}>
        <LockIcon />
      </NavLink>

      <NavLink href='/profile' aria-label='Profile' class={SuperEllipse}>
        <PersonFinderIcon />
      </NavLink>
    </nav>
  </div>
);

export default App;
