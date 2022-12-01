import { Component, Suspense } from 'solid-js';

import Header from '../../components/Header';
import Loader from '../../components/Loader';

import Leaderboard from './Leaderboard';

import './NewsFeed.css';

const NewsFeed: Component = () => {
  return (
    <article class='screen'>
      <Header spot='Discover' />

      <h3 class='info'>Top leagues</h3>

      <Suspense fallback={<Loader />}>
        <Leaderboard />
      </Suspense>
    </article>
  );
};

export default NewsFeed;
