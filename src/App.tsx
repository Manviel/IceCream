import { Component, lazy, Suspense } from 'solid-js';
import { Routes, Route, NavLink } from '@solidjs/router';

import { ActionTypes } from './models/config';
import { Paths } from './models';

import { Skeleton } from './components/Loader';

import FlameIcon from './assets/icons/flame.svg';
import SquareTextIcon from './assets/icons/square-text.svg';
import TextFinderIcon from './assets/icons/text-finder.svg';
import BookIcon from './assets/icons/book.svg';

const Home = lazy(() => import('./pages/Home'));
const Profile = lazy(() => import('./pages/Profile'));
const NotFound = lazy(() => import('./pages/NotFound'));
const Products = lazy(() => import('./pages/Products'));
const Privacy = lazy(() => import('./pages/Privacy'));

const App: Component = () => (
  <div class='flex col items-center'>
    <nav
      class='fixed-bottom dock depth content-full flex justify-between'
      aria-label='Tabs'
    >
      <NavLink
        href={Paths.Home}
        end
        aria-label='Home'
        class={ActionTypes.SuperEllipse}
      >
        <SquareTextIcon />
      </NavLink>

      <NavLink
        href={Paths.Products}
        aria-label='Products'
        class={ActionTypes.SuperEllipse}
      >
        <FlameIcon />
      </NavLink>

      <NavLink
        href={Paths.Privacy}
        aria-label='Privacy'
        class={ActionTypes.SuperEllipse}
      >
        <BookIcon />
      </NavLink>

      <NavLink
        href={Paths.Profile}
        aria-label='Profile'
        class={ActionTypes.SuperEllipse}
      >
        <TextFinderIcon />
      </NavLink>
    </nav>

    <Suspense fallback={<Skeleton />}>
      <Routes>
        <Route path={Paths.Home} element={<Home />} />

        <Route path={Paths.Products} element={<Products />} />

        <Route path={Paths.Profile} element={<Profile />} />

        <Route path={Paths.Privacy} element={<Privacy />} />

        <Route path='*' element={<NotFound />} />
      </Routes>
    </Suspense>
  </div>
);

export default App;
