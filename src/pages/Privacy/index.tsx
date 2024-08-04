import { Component, For, createEffect, Show, createSignal, onMount, ErrorBoundary } from 'solid-js';

import PageDecorator from '../../components/PageDecorator';
import Loader from '../../components/Loader';

import { transformCase, useObserver } from '../../services/utils';
import { getUsers } from '../../services/news';
import { useCacheStore } from '../../services/store';
import { Pages } from '../../global';

import Report, { FullNameType, UserType } from './Report';

import './Privacy.css';

const useStickyNavigation = () => {
  useObserver(
    'article[id]',
    entry => {
      const id = entry.target.getAttribute('id');
      const article = document.querySelector(`.spy-nav a[href="#${id}"]`);

      if (entry.intersectionRatio > 0) {
        article?.classList.add('live');
      } else {
        article?.classList.remove('live');
      }
    },
    {
      rootMargin: '-50px 0px -55%'
    }
  );
};

const requestKey = { url: 'users' };

const Privacy: Component = () => {
  const [loading, setLoading] = createSignal(false);
  const [containers, setContainers] = createSignal<UserType[]>();

  const { getStore, setStore } = useCacheStore();

  const refetch = async () => {
    setLoading(true);

    try {
      const data = await getUsers();

      setContainers(data);
      setStore(requestKey, data);
    } catch (err) {
      console.error('Error fetching users:', err);
    } finally {
      setLoading(false);
    }
  };

  onMount(() => {
    const requestCache = getStore(requestKey);

    if (requestCache) {
      setContainers(requestCache);

      return;
    }

    refetch();
  });

  createEffect(() => {
    if (containers()) useStickyNavigation();
  });

  const getFullName = (user: FullNameType) => `${user.firstName} ${user.lastName}`;

  return (
    <PageDecorator headline={Pages.Privacy} subtitle="Designed for your policy" isDark>
      <ErrorBoundary fallback={<h2 class="price view rounded">Failed to fetch</h2>}>
        {loading() && <Loader />}

        <Show when={containers()} keyed>
          {res => (
            <div class="grid privacy proximity">
              <section class="flex col quick" role="feed">
                <For each={res}>
                  {client => (
                    <Report
                      client={client}
                      name={getFullName(client)}
                      id={transformCase(getFullName(client))}
                    />
                  )}
                </For>
              </section>

              <nav class="spy-nav flex col" aria-label="Table of Contents">
                <For each={res}>
                  {client => (
                    <a href={`#${transformCase(getFullName(client))}`}>{getFullName(client)}</a>
                  )}
                </For>
              </nav>
            </div>
          )}
        </Show>
      </ErrorBoundary>
    </PageDecorator>
  );
};

export default Privacy;
