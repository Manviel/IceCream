import { ConfigurationHistory } from './Memento';

interface Command {
  execute(): void;
}

export class SaveConfigurationCommand implements Command {
  constructor(
    private history: ConfigurationHistory,
    private currentState: () => Record<string, string | number>
  ) {}

  execute(): void {
    this.history.save(this.currentState());
  }
}
