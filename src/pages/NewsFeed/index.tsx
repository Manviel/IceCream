import { Component, Suspense } from 'solid-js';

import Loader from '../../components/Loader';
import Quote from '../../components/Card/Quote';

import Leaderboard from './Leaderboard';

import './NewsFeed.css';

const NewsFeed: Component = () => {
  return (
    <>
      <h2 class='title'>Discover</h2>
      <h3 class='info card-sub'>Top leagues</h3>

      <div class='card view rounded'>
        <Suspense fallback={<Loader />}>
          <Leaderboard />
        </Suspense>
      </div>

      <div class='screen'>
        <Suspense fallback={<Loader />}>
          <Quote />
        </Suspense>
      </div>
    </>
  );
};

export default NewsFeed;
