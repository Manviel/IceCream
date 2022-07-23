export enum ChartColors {
  Blue = '#007AFF',
  Green = '#00e396',
  Purple = '#b25fea',
  Red = '#fa124f',
  Neon = '#04DE71',
}

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

export type Entity = {
  id: string;
  author: string;
  content: string;
  date: string;
  time: string;
  title: string;
};
