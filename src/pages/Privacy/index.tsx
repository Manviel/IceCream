import { Component, For, createEffect, Show, createResource } from 'solid-js';

import PageDecorator from '../../components/PageDecorator';

import { transformCase, useObserver } from '../../services/utils';
import { getUsers } from '../../services/news';
import { Pages } from '../../models';

import Report, { FullNameType, UserType } from './Report';

import './Privacy.css';

const fetchUsers = async () => await getUsers();

const useStickyNavigation = () => {
  useObserver(
    'article[id]',
    (entry) => {
      const id = entry.target.getAttribute('id');
      const article = document.querySelector(`.spy-nav a[href="#${id}"]`);

      if (entry.intersectionRatio > 0) {
        article?.classList.add('live');
      } else {
        article?.classList.remove('live');
      }
    },
    {
      rootMargin: '-50px 0px -55%',
    }
  );
};

const Privacy: Component = () => {
  const [containers] = createResource<UserType[]>(fetchUsers);

  createEffect(() => {
    useStickyNavigation();
  });

  const getFullName = (user: FullNameType) =>
    `${user.firstName} ${user.lastName}`;

  return (
    <PageDecorator
      headline={Pages.Privacy}
      subtitle='Designed for your policy'
      isDark
    >
      <Show when={containers()} keyed>
        {(res) => (
          <div class='grid privacy proximity'>
            <section class='flex col quick' role='feed'>
              <For each={res}>
                {(client) => (
                  <Report
                    client={client}
                    name={getFullName(client)}
                    id={transformCase(getFullName(client))}
                  />
                )}
              </For>
            </section>

            <nav class='spy-nav flex col' aria-label='Table of Contents'>
              <For each={res}>
                {(client) => (
                  <a href={`#${transformCase(getFullName(client))}`}>
                    {getFullName(client)}
                  </a>
                )}
              </For>
            </nav>
          </div>
        )}
      </Show>
    </PageDecorator>
  );
};

export default Privacy;
