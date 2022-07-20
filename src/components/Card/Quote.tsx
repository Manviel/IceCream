import { Component, createResource, Switch, Match } from 'solid-js';

import Loader from '../Loader';

import { getQuote } from '../../services/news';

import GoForwardIcon from '../../assets/icons/go-forward.svg';

import './Card.css';

const fetchQuote = async () => await getQuote();

const Quote: Component = () => {
  const [quote, { refetch }] = createResource(fetchQuote);

  return (
    <Switch fallback={<h2 class='box view rounded screen'>Failed to fetch</h2>}>
      <Match when={quote.loading}>
        <Loader />
      </Match>
      <Match when={quote()}>
        {(res) => (
          <article class='box view rounded screen'>
            <div class='flex justify-between items-center'>
              <p class='flex col'>
                <time>{res.dateModified}</time>
                <span class='box-description'>{res.author}</span>
              </p>

              <button
                class='superellipse flex justify-center items-center'
                onClick={refetch}
                aria-label='Get new quote'
              >
                <GoForwardIcon />
              </button>
            </div>

            <h2 class='info'>{res.content}</h2>
          </article>
        )}
      </Match>
    </Switch>
  );
};

export default Quote;