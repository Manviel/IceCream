import { Index, ErrorBoundary, Component, createEffect } from 'solid-js';

import { getNews } from '../../services/news';
import { useNews } from '../../services/store';
import { Category, LEVEL_2 } from '../../models/config';

import Loader from '../../components/Loader';

import Rank from './Rank';
import Leagues from './Leagues';

import './NewsFeed.css';

const fetchQuery = async (category: string) => await getNews({ category });

const Leaderboard: Component = () => {
  const [data, { updateNews }] = useNews();

  createEffect(() => {
    if (data.news.length === 0) {
      fetchQuery(data.currentRank).then((entities: any) =>
        updateNews(entities)
      );
    }
  });

  return (
    <ErrorBoundary
      fallback={<h2 class='token view rounded screen'>Failed to load</h2>}
    >
      <Leagues currentLeague={data.currentLeague} />

      <ul>
        <Index each={data.news} fallback={<Loader />}>
          {(list, index) => {
            const com = list();

            return (
              <li
                class='screen layer view rounded content-full flex items-center justify-between'
                classList={{ place: com[0] === Category[LEVEL_2] }}
              >
                <article class='products items-center'>
                  <Rank place={index} />

                  <p class='paper-description'>{com[0]}</p>
                </article>

                <p class='paper-description'>{com[1]}</p>
              </li>
            );
          }}
        </Index>
      </ul>
    </ErrorBoundary>
  );
};

export default Leaderboard;
