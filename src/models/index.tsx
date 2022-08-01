export enum ChartColors {
  Blue = '#007AFF',
  Green = '#00e396',
  Purple = '#b25fea',
  Red = '#fa124f',
  Neon = '#04DE71',
}

export enum Category {
  Bronze = 'USD',
  Silver = 'EUR',
  Gold = 'GBP',
  Sapphire = 'JPY',
  Ruby = 'AUD',
}

export type LeagueUnion = 'Bronze' | 'Silver' | 'Gold' | 'Sapphire' | 'Ruby';

export type Entity = {
  [key: string]: number | string;
};
