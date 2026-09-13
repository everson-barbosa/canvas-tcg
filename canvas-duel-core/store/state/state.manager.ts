import { Command } from "./commands/command";
import { factoryState } from "./factory-state";
import { Query } from "./queries/query";

export class StateManager {
  state = factoryState()
  command: Command
  query: Query

  constructor() {
    this.command = new Command(this.state)
    this.query = new Query(this.state)
  }
}