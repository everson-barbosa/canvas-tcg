import { EffectType } from "../../../../shared/cards/effects/effect-base";
import { Store } from "../../../store";
import { EffectResolver } from "../../effect.resolver";
import { ActivateIgnitionEffect } from "./activate-ignition.effect";
import { ActivateIgnitionEffectType } from "./activate-ignition.effect-type";


export class ActivateIgnitionEffectResolver extends EffectResolver<ActivateIgnitionEffect> {
  type = ActivateIgnitionEffectType

  resolve(effect: ActivateIgnitionEffect, store: Store): void {
    const { cardInstanceId, effectIndex } = effect.payload

    const cardInstance = store.state.query.card.getByInstanceId(cardInstanceId)
    
    if (!cardInstance) return

    const thisEffect = cardInstance.definition.effects[effectIndex]

    if (!thisEffect) return

    if (thisEffect.type !== EffectType.IGNITION) return

    const enemy = store.state.query.player.getEnemy(cardInstance.ownerId)

    if (!enemy) return

    store.effect.activateIgnitionEffect({
      cardInstance,
      effect: thisEffect,
      store
    })
  }
}