import { createContext, useContext, ParentComponent } from 'solid-js';
import { createStore } from 'solid-js/store';

import { Entity } from '../models';
import { Category, LEVEL_2 } from '../models/config';

type NewsContextState = {
  readonly news: Entity[];
  readonly currentRank: string;
};

type NewsContextValue = [
  state: NewsContextState,
  actions: {
    updateNews: (news: Entity[]) => void;
  }
];

const defaultState = {
  news: [],
  currentRank: Category[LEVEL_2],
};

const NewsContext = createContext<NewsContextValue>([
  defaultState,
  {
    updateNews: () => undefined,
  },
]);

export const NewsProvider: ParentComponent<{
  news?: Entity[];
}> = (props) => {
  const [state, setState] = createStore({
    news: props.news ?? defaultState.news,
    currentRank: defaultState.currentRank,
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
