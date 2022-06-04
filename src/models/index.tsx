export enum Category {
  All = 'all',
  Business = 'business',
  Sports = 'sports',
  World = 'world',
  Politics = 'politics',
  Technology = 'technology',
  Startup = 'startup',
  Entertainment = 'entertainment',
}

export type Company = {
  id: string;
  author: string;
  content: string;
  date: string;
  time: string;
  title: string;
};
