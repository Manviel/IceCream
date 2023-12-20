import { Component, For, createEffect, Show, createResource } from 'solid-js';

import PageDecorator from '../../components/PageDecorator';
import Card from '../../components/Card';

import { transformCase, useObserver } from '../../services/utils';
import { getUsers } from '../../services/news';
import { Pages } from '../../models';

import Article from './Article';

import './Privacy.css';

type AddressType = {
  address: string;
  city: string;
};

interface FullNameType {
  firstName: string;
  lastName: string;
}

interface UserType extends FullNameType {
  email: string;
  birthDate: string;
  gender: string;
  age: number;
  phone: string;
  height: number;
  weight: number;
  address: AddressType;
  university: string;
}

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
                  <Article
                    name={getFullName(client)}
                    job={client.university}
                    id={transformCase(getFullName(client))}
                    date={client.birthDate}
                  >
                    <div class='grid products proximity users'>
                      <Card
                        title='Height'
                        number={client.height}
                        description='cm'
                      />

                      <Card
                        title='Weight'
                        number={client.weight}
                        description='kg'
                      />

                      <div class='flex col price os'>
                        <p>{client.gender}</p>
                        <strong class='subtitle'>{client.age} years old</strong>
                      </div>

                      <div class='flex col ghost os'>
                        <p>Phone</p>
                        <strong class='subtitle'>{client.phone}</strong>
                      </div>

                      <div class='flex col layer os'>
                        <p>{client.address.address}</p>
                        <strong class='subtitle'>{client.address.city}</strong>
                      </div>

                      <div class='flex col material os'>
                        <p>Email</p>
                        <strong class='subtitle'>{client.email}</strong>
                      </div>
                    </div>
                  </Article>
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
