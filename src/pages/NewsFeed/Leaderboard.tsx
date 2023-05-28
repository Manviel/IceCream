import { For, createSignal, Component, createEffect } from 'solid-js';

import { getNews } from '../../services/news';
import { useStore } from '../../services/store';
import { commasAdapter } from '../../services/utils';

const fetchQuery = async (category: string) => await getNews({ category });

const Leaderboard: Component = () => {
  const [loading, setLoading] = createSignal(false);

  const [data, { updateNews }] = useStore();

  createEffect(() => {
    if (data.news.length === 0) {
      fetchQuery(data.currentRank)
        .then((entities: any) => {
          updateNews(entities);
          setLoading(false);
        })
        .catch(() => setLoading(true));
    }
  });

  return (
    <table class='content-full'>
      <caption>Exchange 1 {data.currentRank}</caption>
      <thead class='material'>
        <tr>
          <th>Currency</th>
          <th>Value</th>
        </tr>
      </thead>
      <tbody>
        {loading() ? (
          <tr>
            <td>Error</td>
            <td>
              <span class='chip price'>Failed to load</span>
            </td>
          </tr>
        ) : (
          <For each={data.news}>
            {(list) => (
              <tr>
                <td>{list[0]}</td>
                <td>
                  <span
                    class='chip'
                    classList={{
                      ghost: Number(list[1]) > 1,
                      price: Number(list[1]) < 1,
                    }}
                  >
                    {commasAdapter(Number(list[1]))}
                  </span>
                </td>
              </tr>
            )}
          </For>
        )}
      </tbody>
    </table>
  );
};

export default Leaderboard;
