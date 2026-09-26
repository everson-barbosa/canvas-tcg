import { State } from "../state";
import { HandQuery } from "./hand.query";
import { QueryBase } from "./query-base";

export class PlayerQuery extends QueryBase {
  hand: HandQuery

  constructor(state: State) {
    super(state)
    this.hand = new HandQuery(state)
  }

  getEnemy(playerId: string) {
    return Object.values(this.state.players).find(player => player.id !== playerId) ?? null
  }

  list() {
    return Object.values(this.state.players)
  }
}