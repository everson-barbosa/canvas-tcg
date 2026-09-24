import { CommandBase } from "./command-base";

export class DeckCommand extends CommandBase {
  takeTop(playerId: string, amount: number) {
    const player = this.state.players[playerId]

    if (!player) return []

    const deck = player.deck
    const cardIds = deck.splice(-amount)

    this.state.players[playerId] = {
      ...player,
      deck,
    }

    return cardIds
  }
}