import { Component, Suspense } from 'solid-js';

import Loader from '../../components/Loader';
import PageDecorator from '../../components/PageDecorator';
import Leaderboard from './Leaderboard';

import './NewsFeed.css';

const NewsFeed: Component = () => {
  return (
    <PageDecorator subtitle='Discover' headline='Leagues'>
      <Suspense fallback={<Loader />}>
        <Leaderboard />
      </Suspense>
    </PageDecorator>
  );
};

export default NewsFeed;
