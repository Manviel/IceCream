interface ProductOption {
  name: string;
  price: number;
}

export class Product {
  constructor(public name: string, public basePrice: number, public options: ProductOption[]) {}
}
