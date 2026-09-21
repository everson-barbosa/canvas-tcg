import { Orientation } from "../shared/cards/interfaces/orientation"
import { Phase } from "./state/entities/phase"
import { Store } from "./store"

export interface DuelConfig {
  players: Array<{
    id: string
    deck: Array<{
      cardId: string
    }>
  }>
  activePlayerId: string
}

export class DuelStarter {
  static start(props: {
    config: DuelConfig
    store: Store
  }) {
    const { config, store } = props

    store.state.command.phase.save(Phase.IDLE)
    store.state.command.turn.setPlayer(config.activePlayerId)

    for (const [playerIndex, player] of Object.entries(config.players)) {
      store.state.command.player.add({
        id: player.id,
        deck: player.deck.map(card => card.cardId),
        hand: [],
        trash: [],
        orientation: Number(playerIndex) % 2 == 0 ? Orientation.NORTH : Orientation.SOUTH
      })

      for (const card of player.deck) {
        store.state.command.card.save({
          cardInstanceId: crypto.randomUUID(),
          ownerId: player.id,
          definition: store.card.getCardById(card.cardId)!
        })
      }
    }
  }
}