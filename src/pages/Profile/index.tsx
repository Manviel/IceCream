import {
  createResource,
  createSignal,
  Switch,
  Match,
  For,
  Component,
} from 'solid-js';

import { getNews } from '../../services/news';

import CardDate from '../../components/Card/CardDate';
import Loader from '../../components/Loader';
import Header from '../../components/Header';

import { Company, Category } from '../../models';

import './Profile.css';

const fetchQuery = async (page: Category) => await getNews({ category: page });

const Profile: Component = () => {
  const [getState, setState] = createSignal(Category.All);

  const [companies] = createResource(getState, fetchQuery);

  return (
    <>
      <Header />

      <div class='page rounded content-full flex col'>
        <h1 class='subtitle'>Your Applications: {getState()}</h1>

        <ul class='bar'>
          <Switch fallback={'Failed to load'}>
            <Match when={companies.loading}>
              <Loader />
            </Match>
            <Match when={companies()}>
              {(list: Company[]) => (
                <For each={list}>
                  {(com) => (
                    <li class='card rounded content-full'>
                      <p class='bar card-description'>{com.author}</p>

                      <h3 class='card-title'>{com.title}</h3>

                      <article class='flex wrap bar justify-between items-center'>
                        {com.content}

                        <CardDate date={com.date} />
                      </article>

                      {com.time}
                    </li>
                  )}
                </For>
              )}
            </Match>
          </Switch>
        </ul>
      </div>
    </>
  );
};

export default Profile;
