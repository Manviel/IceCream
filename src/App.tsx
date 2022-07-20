import { Component, lazy } from 'solid-js';
import { Routes, Route, NavLink } from 'solid-app-router';

import { SuperEllipse } from './components/Superellipse';

import BagIcon from './assets/icons/bag.svg';
import SquareTextIcon from './assets/icons/square-text.svg';
import PersonFinderIcon from './assets/icons/person-finder.svg';
import LockIcon from './assets/icons/lock.svg';

const Home = lazy(() => import('./pages/Home'));
const NewsFeed = lazy(() => import('./pages/NewsFeed'));
const Profile = lazy(() => import('./pages/Profile'));
const NotFound = lazy(() => import('./pages/NotFound'));
const Products = lazy(() => import('./pages/Products'));
const Privacy = lazy(() => import('./pages/Privacy'));

const App: Component = () => {
  return (
    <div class='flex col items-center'>
      <main class='app content-full'>
        <Routes>
          <Route path='/' element={<Home />} />

          <Route path='/news' element={<NewsFeed />} />

          <Route path='/profile' element={<Profile />} />

          <Route path='/products' element={<Products />} />

          <Route path='/privacy' element={<Privacy />} />

          <Route path='*' element={<NotFound />} />
        </Routes>
      </main>

      <nav
        class='fixed-bottom dock content-full flex justify-between'
        aria-label='Tabs'
      >
        <NavLink href='/products' aria-label='Products' class={SuperEllipse}>
          <BagIcon />
        </NavLink>

        <NavLink href='/news' aria-label='News' class={SuperEllipse}>
          <SquareTextIcon />
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
};

export default App;
