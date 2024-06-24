export interface ConfigurationMemento {
  getState(): Record<string, string | number>;
  getTimestamp(): number;
}

class LaptopConfigurationMemento implements ConfigurationMemento {
  private timestamp: number;
  private state: Record<string, string | number>;

  constructor(state: Record<string, string | number>) {
    this.timestamp = Date.now();
    this.state = JSON.parse(JSON.stringify(state));
  }

  getState(): Record<string, string | number> {
    return { ...this.state };
  }

  getTimestamp(): number {
    return this.timestamp;
  }
}

export class ConfigurationHistory {
  constructor(
    private setHistory: (
      fn: (prev: ConfigurationMemento[]) => ConfigurationMemento[]
    ) => void
  ) {}

  save(state: Record<string, string | number>): void {
    this.setHistory((prev) => [...prev, new LaptopConfigurationMemento(state)]);
  }
}
