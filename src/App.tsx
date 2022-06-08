import { Component, lazy, Suspense } from 'solid-js';
import { Routes, Route, NavLink } from 'solid-app-router';

import SuperEllipse from './components/Superellipse';
import Loader from './components/Loader';

import BagIcon from './assets/icons/bag.svg';
import SquareTextIcon from './assets/icons/square-text.svg';
import PersonFinderIcon from './assets/icons/person-finder.svg';

const Home = lazy(() => import('./pages/Home'));
const NewsFeed = lazy(() => import('./pages/NewsFeed'));
const Profile = lazy(() => import('./pages/Profile'));
const NotFound = lazy(() => import('./pages/NotFound'));

const App: Component = () => {
  return (
    <div class='flex col items-center'>
      <main class='app content-full'>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path='/' element={<Home />} />

            <Route path='/news' element={<NewsFeed />} />

            <Route path='/profile' element={<Profile />} />

            <Route path='*' element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>
      <nav
        class='fixed-bottom dock rounded content-full flex justify-between'
        aria-label='Tabs'
      >
        <NavLink href='/home' aria-label='Home'>
          <SuperEllipse>
            <BagIcon />
          </SuperEllipse>
        </NavLink>

        <NavLink href='/news' aria-label='News'>
          <SuperEllipse>
            <SquareTextIcon />
          </SuperEllipse>
        </NavLink>

        <SuperEllipse>Soon</SuperEllipse>

        <NavLink href='/profile' aria-label='Profile'>
          <SuperEllipse>
            <PersonFinderIcon />
          </SuperEllipse>
        </NavLink>
      </nav>
    </div>
  );
};

export default App;
