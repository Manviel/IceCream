import { Index, ErrorBoundary, Component, createEffect } from 'solid-js';

import { getNews } from '../../services/news';
import { useNews } from '../../services/store';
import { useObserver } from '../../services/utils';

import DateBox from '../../components/Card/DateBox';
import Loader from '../../components/Loader';
import Header from '../../components/Header';
import BackwardNavigation from '../../components/Header/BackwardNavigation';

import { Category } from '../../models';

import './NewsFeed.css';

const fetchQuery = async (page: Category) => await getNews({ category: page });

const NewsFeed: Component = () => {
  const [data, { updateNews }] = useNews();

  createEffect(() => {
    if (data.news.length === 0) {
      fetchQuery(Category.All).then((companies) => updateNews(companies));
    }

    useObserver('.paper-description');
  });

  return (
    <div class='page view rounded content-full flex col'>
      <BackwardNavigation subtitle='News' />

      <Header spot='Your Feed' />

      <ul>
        <ErrorBoundary
          fallback={
            <li class='paper layer view rounded content-full'>
              Failed to load
            </li>
          }
        >
          <Index each={data.news} fallback={<Loader />}>
            {(list) => {
              const com = list();

              return (
                <li class='paper layer view rounded content-full'>
                  <div class='paper-grid items-center'>
                    <div>
                      <address class='paper-description'>
                        {com.author} at {com.time}
                      </address>
                      <h2 class='subtitle'>{com.title}</h2>
                    </div>

                    <DateBox date={com.date} />
                  </div>

                  <p class='info'>{com.content}</p>
                </li>
              );
            }}
          </Index>
        </ErrorBoundary>
      </ul>
    </div>
  );
};

export default NewsFeed;
