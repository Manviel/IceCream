import { createContext, useContext, ParentComponent } from 'solid-js';
import { createStore } from 'solid-js/store';

import { Entity } from '../models';

type NewsContextState = {
  readonly news: Entity[];
};

type NewsContextValue = [
  state: NewsContextState,
  actions: {
    updateNews: (news: Entity[]) => void;
  }
];

const defaultState = {
  news: [],
};

const NewsContext = createContext<NewsContextValue>([
  defaultState,
  {
    updateNews: () => undefined,
  },
]);

export const NewsProvider: ParentComponent<{ news?: Entity[] }> = (props) => {
  const [state, setState] = createStore({
    news: props.news ?? defaultState.news,
  });

  const updateNews = (data: Entity[]) => setState('news', data);

  return (
    <NewsContext.Provider
      value={[
        state,
        {
          updateNews,
        },
      ]}
    >
      {props.children}
    </NewsContext.Provider>
  );
};

export const useNews = () => useContext(NewsContext);
