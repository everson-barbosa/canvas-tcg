import { DrawCardEffect } from "../../effect/effects/draw-card/draw-card.effect";
import { Store } from "../../store";
import { EventHandler } from "../event.handler";
import { DuelStartedEvent } from "../events/duel-started.event";

const INITIAL_HAND = 5

export class DrawInitialHandEventHandler extends EventHandler<DuelStartedEvent> {
  handle(event: DuelStartedEvent, store: Store): void {
    const activePlayerId = store.state.query.turn.getActivePlayerId()!

    store.dispatch(
      new DrawCardEffect({
         amount: INITIAL_HAND,
         playerId: activePlayerId
      })
    )

    const enemy = store.state.query.player.getEnemy(activePlayerId)!

    store.dispatch(
      new DrawCardEffect({
        amount: INITIAL_HAND,
        playerId: enemy.id
      })
    )
  }
}