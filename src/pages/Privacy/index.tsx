import { Component, For, createEffect } from 'solid-js';

import PageDecorator from '../../components/PageDecorator';

import Article from './Article';
import { containers } from './library';

import './Privacy.css';

const transformCase = (str: string) => str.replace(/\s+/g, '-').toLowerCase();

const useStickyNavigation = () => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const id = entry.target.getAttribute('id');
        const article = document.querySelector(`.spy-nav a[href="#${id}"]`);

        if (entry.intersectionRatio > 0) {
          article?.classList.add('live');
        } else {
          article?.classList.remove('live');
        }
      });
    },
    {
      rootMargin: '-50px 0px -55%',
    }
  );

  document
    .querySelectorAll('section[id]')
    .forEach((section) => observer.observe(section));
};

const Privacy: Component = () => {
  createEffect(() => {
    useStickyNavigation();
  });

  return (
    <PageDecorator subtitle='Privacy' headline='Designed for your policy'>
      <div class='grid privacy'>
        <div class='flex col quick'>
          <For each={containers}>
            {(section) => (
              <Article
                name={section.name}
                href={section.link}
                id={transformCase(section.name)}
                date={section.date}
              >
                <For each={section.content}>
                  {(content, i) => (
                    <>
                      {section.titles && section.titles[i()] && (
                        <h3 class='info card-sub'>{section.titles[i()]}</h3>
                      )}
                      <p class='info'>{content}</p>
                    </>
                  )}
                </For>
              </Article>
            )}
          </For>
        </div>

        <nav class='spy-nav flex col' aria-label='Contents'>
          <For each={containers}>
            {(section) => (
              <a href={`#${transformCase(section.name)}`}>{section.name}</a>
            )}
          </For>
        </nav>
      </div>
    </PageDecorator>
  );
};

export default Privacy;
