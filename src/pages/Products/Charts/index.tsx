import { Entity } from '../../../models';

export enum ChartTypes {
  Bar = 'bar',
  Line = 'line',
}

export interface IDType {
  id: string;
}

export interface ChartIDType extends IDType {
  source: Entity;
  ariaLabel: string;
}
