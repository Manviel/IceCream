import { StateType } from "../State";

export interface ConfigurationMemento {
  getState(): StateType;
  getTimestamp(): number;
}

class LaptopConfigurationMemento implements ConfigurationMemento {
  private timestamp: number;
  private state: StateType;

  constructor(state: StateType) {
    this.timestamp = Date.now();
    this.state = JSON.parse(JSON.stringify(state));
  }

  getState(): StateType {
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

  save(state: StateType): void {
    this.setHistory((prev) => [...prev, new LaptopConfigurationMemento(state)]);
  }
}
