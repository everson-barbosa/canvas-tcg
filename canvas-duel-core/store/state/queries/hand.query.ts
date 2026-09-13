import { QueryBase } from "./query-base";

export class HandQuery extends QueryBase {
  listByPlayerId(playerId: string) {
    return this.state.players[playerId]?.hand ?? []
  }
}