import { ProductBuilder } from './Builder';
import { Product } from './Composite';

export class ProductFactory {
  createLaptop(name: string, basePrice: number): Product {
    return new ProductBuilder(name, basePrice)
      .addOption('8GB RAM', 0)
      .addOption('16GB RAM', 100)
      .addOption('256GB SSD', 0)
      .addOption('512GB SSD', 150)
      .build();
  }
}
