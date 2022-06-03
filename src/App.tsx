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
        <footer class='dock content-full flex justify-between'>
          <SuperEllipse name='Finder' />
          <SuperEllipse name='Store' />
          <SuperEllipse name='Settings' />
          <SuperEllipse name='Messages' />
        </footer>
      </div>
    </div>
  );
};

export default App;
