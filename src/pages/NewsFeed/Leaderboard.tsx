import { Index, ErrorBoundary, Component, createEffect } from 'solid-js';

import { getNews } from '../../services/news';
import { useNews } from '../../services/store';
import {
  LEVEL_1,
  LEVEL_2,
  LEVEL_3,
  LEVEL_4,
  LEVEL_5,
} from '../../models/config';

import Loader from '../../components/Loader';

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
      <table class='layer content-full screen'>
        <caption>Exchange 1 {data.currentRank}</caption>
        <thead class='depth'>
          <tr>
            <th>Place</th>
            <th>Currency</th>
            <th>Value</th>
            <th>League</th>
          </tr>
        </thead>
        <tbody>
          <Index each={data.news} fallback={<Loader />}>
            {(list, index) => {
              const com = list();

              return (
                <tr>
                  <td>{index + 1}</td>
                  <td>{com[0]}</td>
                  <td>{com[1]}</td>
                  <td>{getEnumKeyByIndex(index)}</td>
                </tr>
              );
            }}
          </Index>
        </tbody>
      </table>
    </ErrorBoundary>
  );
};

export default Leaderboard;
