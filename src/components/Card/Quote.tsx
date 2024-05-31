import {
  Component,
  createSignal,
  onMount,
  ErrorBoundary,
  Show,
  ParentComponent,
} from 'solid-js';

import HelpTooltip from '../Tooltip/HelpTooltip';

import { ShapeIcon } from '../../models/theme';
import { SegregationType } from '../../models';
import { getQuote } from '../../services/news';

import GoForwardIcon from '../../assets/icons/go-forward.svg';

type QuoteType = {
  source: string;
  text: string;
};

interface QuoteViewType extends SegregationType {}

const QuoteView: ParentComponent<QuoteViewType> = (props) => {
  const { title, description, children } = props;

  return (
    <section class='card view rounded'>
      <div class='flex justify-between items-center os layer'>
        <blockquote class='flex col gap'>
          <strong class='subtitle'>{title}</strong>
        </blockquote>

        {children}
      </div>

      <h3 class='box os provision term'>{description}</h3>
    </section>
  );
};

const requestCache = new WeakMap();
const requestKey = { url: 'uselessfacts' };

const Quote: Component = () => {
  const [quote, setQuote] = createSignal<QuoteType>();

  const refetch = async () => {
    try {
      const data = await getQuote();

      setQuote(data);

      requestCache.set(requestKey, data);
    } catch {
      requestCache.delete(requestKey);
    }
  };

  onMount(() => {
    if (requestCache.has(requestKey)) {
      setQuote(requestCache.get(requestKey));

      return;
    }

    refetch();
  });

  return (
    <ErrorBoundary
      fallback={<h2 class='price view rounded'>Failed to fetch</h2>}
    >
      <Show when={quote()} keyed>
        {(res) => (
          <QuoteView title={res.source} description={res.text}>
            <button type='button' class={ShapeIcon.Default} onClick={refetch}>
              <HelpTooltip name='Get new quote'>
                <GoForwardIcon />
              </HelpTooltip>
            </button>
          </QuoteView>
        )}
      </Show>
    </ErrorBoundary>
  );
};

export default Quote;
