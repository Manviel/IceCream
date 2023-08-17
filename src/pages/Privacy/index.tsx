import { Component, For, createEffect } from 'solid-js';

import PageDecorator from '../../components/PageDecorator';
import { transformCase, useObserver } from '../../services/utils';
import { Pages } from '../../models';

import Article from './Article';
import { containers } from './library';

import './Privacy.css';

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
  createEffect(() => {
    useStickyNavigation();
  });

  return (
    <PageDecorator
      headline={Pages.Privacy}
      subtitle='Designed for your policy'
      isDark
    >
      <div class='grid privacy'>
        <section class='flex col quick' role='feed'>
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
        </section>

        <nav class='spy-nav flex col' aria-label='Table of Contents'>
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
