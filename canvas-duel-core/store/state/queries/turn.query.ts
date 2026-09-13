import { QueryBase } from "./query-base";

export class TurnQuery extends QueryBase {
  getActivePlayer() {
    return this.state.turn.activePlayer ?? null
  }
}