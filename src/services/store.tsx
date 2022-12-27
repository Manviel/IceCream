import {
  createContext,
  useContext,
  ParentComponent,
  createMemo,
} from 'solid-js';
import { createStore } from 'solid-js/store';

import { Entity } from '../models';
import { Category, LEVEL_2 } from '../models/config';

type NewsContextState = {
  readonly news: Entity[];
  readonly currentRank: string;
};

const defaultState: NewsContextState = {
  news: [],
  currentRank: Category[LEVEL_2],
};

const NewsContext = createContext([
  defaultState,
  {
    updateNews: (data: Entity[]) => {},
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

  const contextValue = createMemo(() => [state, { updateNews }], []);

  return (
    <NewsContext.Provider value={contextValue()}>
      {props.children}
    </NewsContext.Provider>
  );
};

export const useNews = () => useContext(NewsContext);
