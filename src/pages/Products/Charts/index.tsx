import { Entity, IDType } from '../../../global';

export enum ChartTypes {
  Bar = 'bar',
  Line = 'line'
}

export interface ChartIDType extends IDType {
  source: Entity;
  ariaLabel?: string;
  config?: Entity;
}
