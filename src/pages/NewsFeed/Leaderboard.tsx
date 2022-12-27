import { Index, ErrorBoundary, Component, createEffect } from 'solid-js';

import { getNews } from '../../services/news';
import { useNews } from '../../services/store';
import { commasAdapter } from '../../services/utils';

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
      <table class='content-full screen'>
        <caption>Exchange 1 {data.currentRank}</caption>
        <thead class='material'>
          <tr>
            <th>Currency</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          <Index each={data.news} fallback={<Loader />}>
            {(list) => {
              const com = list();

              return (
                <tr>
                  <td>{com[0]}</td>
                  <td>
                    <span
                      class='chip'
                      classList={{
                        ghost: com[1] > 1,
                        price: com[1] < 1,
                        alice: com[1] > 100,
                      }}
                    >
                      {commasAdapter(Number(com[1]))}
                    </span>
                  </td>
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
