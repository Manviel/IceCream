import {
  createResource,
  createSignal,
  Switch,
  Match,
  For,
  Component,
} from 'solid-js';

import { getNews } from '../../services/news';

import DateBox from '../../components/Card/DateBox';
import Loader from '../../components/Loader';
import Header from '../../components/Header';

import { Company, Category } from '../../models';

import './NewsFeed.css';

const fetchQuery = async (page: Category) => await getNews({ category: page });

const NewsFeed: Component = () => {
  const [getState, setState] = createSignal(Category.All);

  const [companies] = createResource(getState, fetchQuery);

  return (
    <div class='page rounded content-full flex col'>
      <Header spot='Your Feed' />

      <ul>
        <Switch fallback={'Failed to load'}>
          <Match when={companies.loading}>
            <Loader />
          </Match>
          <Match when={companies()}>
            {(list: Company[]) => (
              <For each={list}>
                {(com) => (
                  <li class='paper rounded content-full'>
                    <div class='flex justify-between items-center'>
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
                )}
              </For>
            )}
          </Match>
        </Switch>
      </ul>
    </div>
  );
};

export default NewsFeed;
