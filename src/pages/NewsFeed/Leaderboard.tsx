import { For, createSignal, Component, createEffect } from 'solid-js';

import ArrowUpIcon from '../../assets/icons/arrow-up.svg';

import { getNews } from '../../services/news';
import { useNewsStore } from '../../services/store';
import { commasAdapter } from '../../services/utils';

const fetchQuery = async (category: string) => await getNews({ category });

const Leaderboard: Component = () => {
  const [loading, setLoading] = createSignal(false);

  const [data, { updateNews }] = useNewsStore();

  createEffect(() => {
    if (data.news?.length === 0 && data.currentRank) {
      fetchQuery(data.currentRank)
        .then((entities: any) => {
          updateNews(entities);
          setLoading(false);
        })
        .catch(() => setLoading(true));
    }
  });

  return (
    <table class='content-full concise'>
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
            {(list) => {
              const didGrewUp = Number(list[1]) > 1;

              return (
                <tr>
                  <td>{list[0]}</td>
                  <td>
                    <span
                      class='chip movement widget-title items-center'
                      classList={{
                        ghost: didGrewUp,
                        price: Number(list[1]) < 1,
                      }}
                    >
                      <div
                        class='flex items-center justify-center movement-direction'
                        role='img'
                        aria-label={didGrewUp ? 'Up by' : 'Down by'}
                      >
                        <ArrowUpIcon />
                      </div>

                      {commasAdapter(Number(list[1]))}
                    </span>
                  </td>
                </tr>
              );
            }}
          </For>
        )}
      </tbody>
    </table>
  );
};

export default Leaderboard;
