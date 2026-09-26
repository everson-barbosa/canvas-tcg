import { QueryBase } from "./query-base";

export class TurnQuery extends QueryBase {
  getActivePlayerId() {
    return this.state.turn.activePlayerId ?? null
  }
}