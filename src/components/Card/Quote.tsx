import { Component, createResource, Switch, Match } from 'solid-js';

import Loader from '../Loader';

import { getQuote } from '../../services/news';

import './DateBox.css';

const fetchQuote = async () => await getQuote();

const Quote: Component = () => {
  const [quote] = createResource(fetchQuote);

  return (
    <Switch fallback={<h2 class='box view rounded info'>Failed to fetch</h2>}>
      <Match when={quote.loading}>
        <Loader />
      </Match>
      <Match when={quote()}>
        {(res) => (
          <div class='box view rounded info'>
            <p class='flex justify-between'>
              <span>{res.author}</span>
              <time>{res.dateModified}</time>
            </p>

            <h2 class='info'>{res.content}</h2>
          </div>
        )}
      </Match>
    </Switch>
  );
};

export default Quote;
