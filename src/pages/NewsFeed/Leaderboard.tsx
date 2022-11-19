import { Index, ErrorBoundary, Component, createEffect } from 'solid-js';

import { getNews } from '../../services/news';
import { useNews } from '../../services/store';
import {
  Category,
  LEVEL_1,
  LEVEL_2,
  LEVEL_3,
  LEVEL_4,
  LEVEL_5,
} from '../../models/config';

import Loader from '../../components/Loader';

import Rank from './Rank';
import Leagues from './Leagues';

import './NewsFeed.css';

const getEnumKeyByIndex = (place: number) => {
  if (place < 5) return LEVEL_1;

  if (place > 5 && place < 10) return LEVEL_2;

  if (place > 10 && place < 15) return LEVEL_3;

  if (place > 15 && place < 20) return LEVEL_4;

  return LEVEL_5;
};

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
      <ul>
        <Index each={data.news} fallback={<Loader />}>
          {(list, index) => {
            const com = list();

            return (
              <li
                class='screen layer view rounded content-full flex items-center justify-between'
                classList={{ place: com[0] === Category[LEVEL_2] }}
              >
                <article class='flex items-center justify-between content-full'>
                  <Rank place={index} />
                  <Leagues currentLeague={com[0]} />

                  <p class='paper-description'>{com[1]}</p>
                  <p class='paper'>{getEnumKeyByIndex(index)}</p>
                </article>
              </li>
            );
          }}
        </Index>
      </ul>
    </ErrorBoundary>
  );
};

export default Leaderboard;
