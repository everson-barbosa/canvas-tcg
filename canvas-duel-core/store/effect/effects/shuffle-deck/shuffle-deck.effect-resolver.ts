import { Store } from "../../../store";
import { EffectResolver } from "../../effect.resolver";
import { ShuffleDeckEffect } from "./shuffle-deck.effect";
import { ShuffleDeckEffectType } from "./shuffle-deck.effect-type";

export class ShuffleDeckEffectResolver extends EffectResolver<ShuffleDeckEffect> {
  type = ShuffleDeckEffectType

  resolve(effect: ShuffleDeckEffect, store: Store): void {
    store.state.command.player.deck.shuffle(effect.payload.ownerId)
  }

}