import { ProductBuilder } from './Builder';
import { Parts, Product } from './Composite';

export class ProductFactory {
  createLaptop(name: string, basePrice: number): Product {
    return new ProductBuilder(name, basePrice)
      .addOption(`8GB ${Parts.RAM}`, 0)
      .addOption(`16GB ${Parts.RAM}`, 100)
      .addOption(`256GB ${Parts.Storage}`, 0)
      .addOption(`512GB ${Parts.Storage}`, 150)
      .build();
  }
}
