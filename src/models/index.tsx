import { LEVEL_1, LEVEL_2, LEVEL_3, LEVEL_4, LEVEL_5 } from './config';

export enum ChartColors {
  Blue = '#007AFF',
  Green = '#00e396',
  Purple = '#b25fea',
  Red = '#fa124f',
  Neon = '#04DE71',
}

export type LeagueUnion =
  | typeof LEVEL_1
  | typeof LEVEL_2
  | typeof LEVEL_3
  | typeof LEVEL_4
  | typeof LEVEL_5;

export type Entity = {
  [key: string]: number | string;
};
