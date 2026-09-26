import { State } from "../state";

export class CommandBase {
  state: State

  constructor(state: State) {
    this.state = state
  }
}