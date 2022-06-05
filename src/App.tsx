import { Component, lazy, Suspense } from 'solid-js';
import { Routes, Route, Link } from 'solid-app-router';

import SuperEllipse from './components/Superellipse';
import Loader from './components/Loader';

import BagIcon from './assets/icons/bag.svg';
import SquareTextIcon from './assets/icons/square-text.svg';
import PersonFinderIcon from './assets/icons/person-finder.svg';

const Home = lazy(() => import('./pages/Home'));
const NewsFeed = lazy(() => import('./pages/NewsFeed'));

const App: Component = () => {
  return (
    <div class='flex col items-center'>
      <main class='app content-full'>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path='/' element={<Home />} />

            <Route path='/news' element={<NewsFeed />} />
          </Routes>
        </Suspense>
      </main>
      <nav
        class='fixed-bottom dock rounded content-full flex justify-between'
        aria-label='Tabs'
      >
        <Link href='/' aria-label='Home'>
          <SuperEllipse>
            <BagIcon />
          </SuperEllipse>
        </Link>

        <Link href='/news' aria-label='News'>
          <SuperEllipse>
            <SquareTextIcon />
          </SuperEllipse>
        </Link>

        <SuperEllipse>Soon</SuperEllipse>

        <Link href='/profile' aria-label='News'>
          <SuperEllipse>
            <PersonFinderIcon />
          </SuperEllipse>
        </Link>
      </nav>
    </div>
  );
};

export default App;
