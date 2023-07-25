import { Component, lazy, Suspense } from 'solid-js';
import { Routes, Route } from '@solidjs/router';

import { Pages, Paths } from './models';

import { Skeleton } from './components/Loader';
import TabLink from './components/Link';

import FlameIcon from './assets/icons/flame.svg';
import SquareTextIcon from './assets/icons/square-text.svg';
import TextFinderIcon from './assets/icons/text-finder.svg';
import BookIcon from './assets/icons/book.svg';

const Home = lazy(() => import('./pages/Home'));
const Profile = lazy(() => import('./pages/Profile'));
const NotFound = lazy(() => import('./pages/NotFound'));
const Products = lazy(() => import('./pages/Products'));
const Privacy = lazy(() => import('./pages/Privacy'));
const Relax = lazy(() => import('./pages/Relax'));

const App: Component = () => (
  <div class='flex col items-center'>
    <nav
      class='sticky dock depth content-full flex justify-between'
      aria-label='Tabs'
    >
      <TabLink href={Paths.Home} end id={Pages.Home}>
        <SquareTextIcon />
      </TabLink>

      <TabLink href={Paths.Products} id={Pages.Products}>
        <FlameIcon />
      </TabLink>

      <TabLink href={Paths.Privacy} id={Pages.Privacy}>
        <BookIcon />
      </TabLink>

      <TabLink href={Paths.Profile} id={Pages.Profile}>
        <TextFinderIcon />
      </TabLink>
    </nav>

    <Suspense fallback={<Skeleton />}>
      <Routes>
        <Route path={Paths.Home} element={<Home />} />

        <Route path={Paths.Products} element={<Products />} />

        <Route path={Paths.Profile} element={<Profile />} />

        <Route path={Paths.Privacy} element={<Privacy />} />

        <Route path={Paths.Relax} element={<Relax />} />

        <Route path='*' element={<NotFound />} />
      </Routes>
    </Suspense>
  </div>
);

export default App;
