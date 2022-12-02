import { Index, ErrorBoundary, Component, createEffect } from 'solid-js';

import { getNews } from '../../services/news';
import { useNews } from '../../services/store';

import Loader from '../../components/Loader';

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
      fallback={<h2 class='layer view rounded screen'>Failed to load</h2>}
    >
      <table class='layer content-full screen'>
        <caption>Exchange 1 {data.currentRank}</caption>
        <thead class='depth'>
          <tr>
            <th>Place</th>
            <th>Currency</th>
            <th>Value</th>
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
