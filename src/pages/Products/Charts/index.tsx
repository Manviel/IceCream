import { Entity, IDType } from '../../../models';

export enum ChartTypes {
  Bar = 'bar',
  Line = 'line',
}

export interface ChartIDType extends IDType {
  source: Entity;
  ariaLabel?: string;
}
