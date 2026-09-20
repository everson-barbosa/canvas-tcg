import { EffectType } from "../../../../shared/cards/effects/effect";
import { Store } from "../../../store";
import { ActionProvider } from "../../action.provider";
import { UseIgnitionEffectAction } from "./use-ignition-effect.action";


export class UseIgnitionEffectActionProvider extends ActionProvider<UseIgnitionEffectAction> {
  provide(store: Store): UseIgnitionEffectAction[] {
    const { query } = store.state

    const actions: UseIgnitionEffectAction[] = []

    const activePlayer = query.turn.getActivePlayer()

    if (!activePlayer) return actions

    const cards = query.card.listByOwnerId(activePlayer)

    for (const card of cards) {
      for (const [effectIndex, effect] of Object.entries(card.definition.effects)) {
        const isIgnitionEffect = effect.type === EffectType.IGNITION

        if (!isIgnitionEffect) continue;

        const canActivate = store.effect.canActivateIgnitionEffect({
          cardInstance: card,
          effect,
          store
        })

        if (!canActivate) continue

        actions.push(
          new UseIgnitionEffectAction({
            ownerId: activePlayer,
            cardInstanceId: card.cardInstanceId,
            effectIndex: Number(effectIndex)
          })
        )
      }
    }

    return actions;
  }
}