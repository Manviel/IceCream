import { StateType } from '../State';

import { ConfigurationHistory } from './Memento';

interface Command {
  execute(): void;
}

export class SaveConfigurationCommand implements Command {
  constructor(private history: ConfigurationHistory, private currentState: () => StateType) {}

  execute(): void {
    this.history.save(this.currentState());
  }
}
