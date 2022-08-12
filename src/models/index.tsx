export enum ChartColors {
  Blue = 'hsl(211, 100%, 50%)',
  Green = 'hsl(160, 100%, 45%)',
  Purple = 'hsl(276, 77%, 65%)',
  Red = 'hsl(344, 96%, 53%)',
  Neon = 'hsl(150, 96%, 44%)',
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
