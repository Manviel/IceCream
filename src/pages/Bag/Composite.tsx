import { For } from 'solid-js';
import { JSX } from 'solid-js/jsx-runtime';

export interface IProductComponent {
  name: string;
  getPrice(): number;
  display(): JSX.Element;
}

interface ICompositeProduct extends IProductComponent {
  add(component: IProductComponent): void;
}

export class ProductComponent implements IProductComponent {
  constructor(public name: string, private price: number) {
    this.name = name;
    this.price = price;
  }

  getPrice(): number {
    return this.price;
  }

  display(): JSX.Element {
    return (
      <div>
        {this.name}: ${this.price}
      </div>
    );
  }
}

export class CompositeProduct implements ICompositeProduct {
  private children: IProductComponent[] = [];

  constructor(public name: string) {}

  add(component: IProductComponent): void {
    this.children.push(component);
  }

  getPrice(): number {
    return this.children.reduce((sum, child) => sum + child.getPrice(), 0);
  }

  display(): JSX.Element {
    return (
      <div>
        {this.name}
        <For each={this.children}>{(child) => child.display()}</For>
      </div>
    );
  }
}
