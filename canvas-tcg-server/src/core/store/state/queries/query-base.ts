import { State } from "../state";

export class QueryBase {
  protected state: State

  constructor(state: State) {
    this.state = state
  }
}