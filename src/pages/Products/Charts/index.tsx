import { Entity, IDType } from '../../../global';

export enum ChartTypes {
  Bar = 'bar',
  Line = 'line'
}

export interface ChartIDType<T> extends IDType {
  source: Entity<T>;
  ariaLabel?: string;
  config?: Entity<T>;
}

export type ChartKind = ChartIDType<string | number>;
