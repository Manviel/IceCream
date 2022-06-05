import { Component, lazy } from 'solid-js';
import { Routes, Route, Link } from 'solid-app-router';

import SuperEllipse from './components/Superellipse';

import BagIcon from './assets/icons/bag.svg';

const Home = lazy(() => import('./pages/Home'));
const Profile = lazy(() => import('./pages/Profile'));

const App: Component = () => {
  return (
    <div class='flex col items-center'>
      <main class='app content-full'>
        <Routes>
          <Route path='/' element={<Home />} />

          <Route path='/profile' element={<Profile />} />
        </Routes>
      </main>
      <nav
        class='fixed-bottom dock rounded content-full flex justify-between'
        aria-label='Tabs'
      >
        <Link href='/'>
          <SuperEllipse>
            <BagIcon />
          </SuperEllipse>
        </Link>

        <SuperEllipse>Store</SuperEllipse>

        <SuperEllipse>Settings</SuperEllipse>

        <SuperEllipse>Messages</SuperEllipse>
      </nav>
    </div>
  );
};

export default App;
