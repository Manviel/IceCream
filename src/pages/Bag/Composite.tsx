import { For } from 'solid-js';

export class ProductComponent {
  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }

  getPrice() {
    return this.price;
  }

  display() {
    return (
      <div>
        {this.name}: ${this.price}
      </div>
    );
  }
}

export class CompositeProduct extends ProductComponent {
  constructor(name: string) {
    super(name, 0);
    this.children = [];
  }

  add(component) {
    this.children.push(component);
  }

  getPrice() {
    return this.children.reduce((sum, child) => sum + child.getPrice(), 0);
  }

  display() {
    return (
      <div>
        {this.name}
        <For each={this.children}>{(child) => child.display()}</For>
      </div>
    );
  }
}
