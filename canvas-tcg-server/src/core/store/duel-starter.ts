import { Orientation } from "../shared/cards/interfaces/orientation"
import { DuelStartedEvent } from "./event/events/duel-started/duel-started.event"
import { CardInstance } from "./state/entities/cards"
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

    store.state.command.phase.save(Phase.STRATEGY)
    store.state.command.turn.setPlayer(config.activePlayerId)

    for (const [playerIndex, player] of Object.entries(config.players)) {
      const cards: CardInstance[] = player.deck.map(card => ({
          cardInstanceId: crypto.randomUUID(),
          ownerId: player.id,
          definition: store.card.getCardById(card.cardId)!
      }))

      for (const card of cards) {
        store.state.command.card.save({
          cardInstanceId: card.cardInstanceId,
          ownerId: player.id,
          definition: store.card.getCardById(card.definition.id)!
        })
      }

      store.state.command.player.add({
        id: player.id,
        deck: cards.map(card => card.cardInstanceId),
        hand: [],
        trash: [],
        orientation: Number(playerIndex) % 2 == 0 ? Orientation.NORTH : Orientation.SOUTH
      })
    }

    store.propagateEvent(new DuelStartedEvent())
  }
}