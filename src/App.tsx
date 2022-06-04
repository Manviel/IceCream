import { Component, lazy } from 'solid-js';
import { Routes, Route } from 'solid-app-router';

import SuperEllipse from './components/Superellipse';

const Home = lazy(() => import('./pages/Home'));
const Profile = lazy(() => import('./pages/Profile'));

const App: Component = () => {
  return (
    <div class='flex col items-center'>
      <div class='app content-full'>
        <Routes>
          <Route path='/' element={<Home />} />

          <Route path='/profile' element={<Profile />} />
        </Routes>
      </div>
      <nav
        class='fixed-bottom content-full flex justify-center'
        aria-label='Tabs'
      >
        <ul class='list dock content-full flex justify-between'>
          <li>
            <SuperEllipse name='Finder' />
          </li>
          <li>
            <SuperEllipse name='Store' />
          </li>
          <li>
            <SuperEllipse name='Settings' />
          </li>
          <li>
            <SuperEllipse name='Messages' />
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default App;
