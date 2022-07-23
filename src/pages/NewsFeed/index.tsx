import { Index, ErrorBoundary, Component, createEffect } from 'solid-js';

import { getNews } from '../../services/news';
import { useNews } from '../../services/store';

import Loader from '../../components/Loader';
import HeaderTemplate from '../../components/Header/HeaderTemplate';
import PageDecorator from '../../components/PageDecorator';

import { Category, ChartColors } from '../../models';

import './NewsFeed.css';

const getRankColor = (rank: number) => {
  if (rank < 7) return ChartColors.Neon;

  if (rank > 27) return ChartColors.Red;

  return null;
};

const fetchQuery = async (page: Category) => await getNews({ category: page });

const NewsFeed: Component = () => {
  const [data, { updateNews }] = useNews();

  createEffect(() => {
    if (data.news.length === 0) {
      fetchQuery(Category.Bronze).then((companies: any) =>
        updateNews(companies)
      );
    }
  });

  return (
    <PageDecorator>
      <HeaderTemplate subtitle='Discover' headline='Golden League' />

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
                <li class='screen layer view rounded content-full flex items-center justify-between'>
                  <article class='paper-grid items-center'>
                    <h2
                      class='box rank flex items-center justify-center'
                      style={{ color: getRankColor(index) }}
                    >
                      {index + 1}
                    </h2>

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
