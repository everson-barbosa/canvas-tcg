import { QueryBase } from "./query-base";

export class HandQuery extends QueryBase {
  listByPlayerId(playerId: string) {
    return this.state.players[playerId]?.hand ?? []
  }

  getAmountByPlayer(playerId: string): number {
    return this.state.players[playerId]?.hand?.length ?? 0
  }
}