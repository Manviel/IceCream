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
                {(section) => (
                  <Article
                    name={getFullName(section)}
                    job={section.university}
                    id={transformCase(getFullName(section))}
                    date={section.birthDate}
                  >
                    <div class='grid products proximity users'>
                      <Card
                        title='Height'
                        number={section.height}
                        description='cm'
                      />

                      <Card
                        title='Weight'
                        number={section.weight}
                        description='kg'
                      />

                      <div class='flex col price os'>
                        <p>{section.gender}</p>
                        <strong class='subtitle'>
                          {section.age} years old
                        </strong>
                      </div>

                      <div class='flex col ghost os'>
                        <p>Phone</p>
                        <strong class='subtitle'>{section.phone}</strong>
                      </div>

                      <div class='flex col layer os'>
                        <p>{section.address.address}</p>
                        <strong class='subtitle'>{section.address.city}</strong>
                      </div>

                      <div class='flex col material os'>
                        <p>Email</p>
                        <strong class='subtitle'>{section.email}</strong>
                      </div>
                    </div>
                  </Article>
                )}
              </For>
            </section>

            <nav class='spy-nav flex col' aria-label='Table of Contents'>
              <For each={res}>
                {(section) => (
                  <a href={`#${transformCase(getFullName(section))}`}>
                    {getFullName(section)}
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
