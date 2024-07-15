export interface ProductOption {
  name: string;
  price: number;
}

export enum Parts {
  CPU = 'Chip',
  RAM = 'Memory',
  Storage = 'Storage'
}

export class Product {
  constructor(public name: string, public basePrice: number, public options: ProductOption[]) {}
}
