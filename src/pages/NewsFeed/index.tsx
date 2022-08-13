import { Index, ErrorBoundary, Component, createEffect } from 'solid-js';

import { getNews } from '../../services/news';
import { useNews } from '../../services/store';

import Loader from '../../components/Loader';
import HeaderTemplate from '../../components/Header/HeaderTemplate';
import PageDecorator from '../../components/PageDecorator';

import { Category } from '../../models';

import Rank from './Rank';
import Leagues from './Leagues';

import './NewsFeed.css';

const fetchQuery = async (page: Category) => await getNews({ category: page });

const NewsFeed: Component = () => {
  const [data, { updateNews }] = useNews();

  createEffect(() => {
    if (data.news.length === 0) {
      fetchQuery(data.currentRank).then((entities: any) =>
        updateNews(entities)
      );
    }
  });

  return (
    <PageDecorator>
      <HeaderTemplate
        subtitle='Discover'
        headline={`${data.currentLeague} League`}
      />

      <Leagues currentLeague={data.currentLeague} />

      <ul>
        <ErrorBoundary
          fallback={
            <li class='screen layer view rounded content-full'>
              Failed to load
            </li>
          }
        >
          <Index each={data.news} fallback={<Loader />}>
            {(list, index) => {
              const com = list();

              return (
                <li
                  class='screen layer view rounded content-full flex items-center justify-between'
                  classList={{ place: com[0] === Category.Silver }}
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
        </ErrorBoundary>
      </ul>
    </PageDecorator>
  );
};

export default NewsFeed;
