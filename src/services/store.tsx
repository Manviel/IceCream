import { Entity } from '../global';

type ContextState = {
  url: string;
};

const defaultState = new WeakMap();

export const useCacheStore = () => {
  const setStore = (requestKey: ContextState, data: Entity<string>) => defaultState.set(requestKey, data);

  const getStore = (requestKey: ContextState) => {
    if (defaultState.has(requestKey)) {
      return defaultState.get(requestKey);
    }
  };

  return {
    setStore,
    getStore
  };
};
