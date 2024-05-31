import { For, createSignal, Component, createEffect } from 'solid-js';

import ArrowUpIcon from '../../../assets/icons/arrow-up.svg';

import { getNews } from '../../../services/news';
import { useNewsStore } from '../../../services/store';
import { commasAdapter } from '../../../services/utils';

const DEAL = 10;

const Leaderboard: Component = () => {
  const [loading, setLoading] = createSignal(false);

  const [{ news, currentRank }, { updateNews }] = useNewsStore();

  createEffect(async () => {
    if (news?.length === 0 && currentRank) {
      try {
        const entities = await getNews({ category: currentRank });

        updateNews(entities);
        setLoading(false);
      } catch {
        setLoading(true);
      }
    }
  });

  return (
    <table class='content-full concise'>
      <caption>Exchange 1 {currentRank}</caption>
      <thead class='material'>
        <tr>
          <th>Title</th>
          <th>Value</th>
          <th>Rating</th>
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
          <For each={news}>
            {(list) => {
              const didGrewUp = Number(list.discountPercentage) > DEAL;
              const hasDiscount = Number(list.discountPercentage) < DEAL;

              return (
                <tr>
                  <td>{list.title}</td>
                  <td>
                    <span
                      class='chip movement widget-title items-center'
                      classList={{
                        ghost: didGrewUp,
                        price: hasDiscount,
                      }}
                    >
                      <div
                        class='flex items-center justify-center movement-direction'
                        role='img'
                        aria-label={didGrewUp ? 'Up by' : 'Down by'}
                      >
                        <ArrowUpIcon />
                      </div>

                      {commasAdapter(Number(list.price))}
                    </span>
                  </td>
                  <td>{list.rating}</td>
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
