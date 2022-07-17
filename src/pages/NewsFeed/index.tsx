import { Index, ErrorBoundary, Component, createEffect } from 'solid-js';

import { getNews } from '../../services/news';
import { useNews } from '../../services/store';

import { DateBox } from '../../components/Card';
import Loader from '../../components/Loader';
import Header from '../../components/Header';
import BackwardNavigation from '../../components/Header/BackwardNavigation';
import PageDecorator from '../../components/PageDecorator';

import { Category } from '../../models';

import './NewsFeed.css';

const fetchQuery = async (page: Category) => await getNews({ category: page });

const NewsFeed: Component = () => {
  const [data, { updateNews }] = useNews();

  createEffect(() => {
    if (data.news.length === 0) {
      fetchQuery(Category.All).then((companies) => updateNews(companies));
    }
  });

  return (
    <PageDecorator>
      <BackwardNavigation subtitle='News' />

      <Header spot='Your Feed' />

      <ul>
        <ErrorBoundary
          fallback={
            <li class='screen layer view rounded content-full'>
              Failed to load
            </li>
          }
        >
          <Index each={data.news} fallback={<Loader hasBox />}>
            {(list) => {
              const com = list();

              return (
                <li class='screen layer view rounded content-full'>
                  <div class='paper-grid items-center'>
                    <div>
                      <address class='paper-description'>
                        {com.author} at {com.time}
                      </address>
                      <h2 class='subtitle'>{com.title}</h2>
                    </div>

                    <DateBox description={com.date} />
                  </div>

                  <p class='info'>{com.content}</p>
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
