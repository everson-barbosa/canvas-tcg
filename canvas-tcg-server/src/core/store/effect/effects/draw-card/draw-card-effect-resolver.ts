import { CardDrawnEvent } from "../../../event/events/card-drawn/card-drawn.event";
import { Store } from "../../../store";
import { EffectResolver } from "../../effect.resolver";
import { DrawCardEffect } from "./draw-card.effect";
import { DrawCardEffectType } from "./draw-card.effect-type";


export class DrawCardEffectResolver extends EffectResolver<DrawCardEffect> {
  type = DrawCardEffectType

  resolve(effect: DrawCardEffect, store: Store): void {
    const cardIds = store.state.command.player.deck.takeTop(
      effect.payload.playerId,
      effect.payload.amount
    )
    store.state.command.player.hand.add(effect.payload.playerId, cardIds)

    store.propagateEvent(
      new CardDrawnEvent({
        cardIds,
        ownerId: effect.payload.playerId
      })
    )

  }
}