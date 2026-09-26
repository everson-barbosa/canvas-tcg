import { CommandBase } from "./command-base";

export class HandCommand extends CommandBase {
  add(playerId: string, cardIds: string[]) {
    const player = this.state.players[playerId]

    if (!player) return

    this.state.players[player.id] = {
      ...player,
      hand: [...player.hand, ...cardIds]
    }
  }
}