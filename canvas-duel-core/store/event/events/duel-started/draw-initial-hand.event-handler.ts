import { DrawCardEffect } from "../../../effect/effects/draw-card/draw-card.effect";
import { ShuffleDeckEffect } from "../../../effect/effects/shuffle-deck/shuffle-deck.effect";
import { Store } from "../../../store";
import { EventHandler } from "../../event.handler";
import { DuelStartedEvent } from "./duel-started.event";
import { DuelStartedEventType } from "./duel-started.event-type";

const INITIAL_HAND = 5

export class DrawInitialHandEventHandler extends EventHandler<DuelStartedEvent> {
  type = DuelStartedEventType

  handle(event: DuelStartedEvent, store: Store): void {
    for (const player of store.state.query.player.list()) {
      store.dispatch(
        new ShuffleDeckEffect({
          ownerId: player.id
        })
      )

      store.dispatch(
        new DrawCardEffect({
          amount: INITIAL_HAND,
          playerId: player.id
        })
      )
    }
  }
}