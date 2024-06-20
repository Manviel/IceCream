import { For, createSignal, Component, onMount } from 'solid-js';

import ArrowUpIcon from '../../../assets/icons/arrow-up.svg';

import { getNews } from '../../../services/news';
import { useCacheStore } from '../../../services/store';
import { commasAdapter } from '../../../services/utils';
import { Category } from '../../../models/config';
import { Entity } from '../../../models';

const DEAL = 10;
const currentRank = Category;
const requestKey = { url: 'news' };

const Leaderboard: Component = () => {
  const [loading, setLoading] = createSignal(false);
  const [news, setNews] = createSignal<Entity[]>();

  const { getStore, setStore } = useCacheStore();

  const refetch = async () => {
    setLoading(true);

    try {
      const data = await getNews({ category: currentRank });

      setNews(data);
      setStore(requestKey, data);
    } catch (err) {
      console.error('Error fetching news:', err);
    } finally {
      setLoading(false);
    }
  };

  onMount(() => {
    const requestCache = getStore(requestKey);

    if (requestCache) {
      setNews(requestCache);

      return;
    }

    refetch();
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
            <td>Failed to load</td>
            <td>503</td>
          </tr>
        ) : (
          <For each={news()}>
            {(list) => {
              const didGrewUp = Number(list.discountPercentage) > DEAL;
              const hasDiscount = Number(list.discountPercentage) < DEAL;

              return (
                <tr>
                  <td>{list.title}</td>
                  <td>
                    <span
                      class='chip movement tab items-center'
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
