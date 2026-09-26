import { ActivateIgnitionEffect } from "../../../effect/effects/activate-ignition/activate-ignition.effect";
import { Store } from "../../../store";
import { ActionExecutor } from "../../action.executor";
import { UseIgnitionEffectAction } from "./use-ignition-effect.action";
import { UseIgnitionEffectActionChoice } from "./use-ignition-effect.action-choice";
import { UseIgnitionEffectActionType } from "./use-ignition-effect.action-type";

export class UseIgnitionEffectActionExecutor extends ActionExecutor {
  type = UseIgnitionEffectActionType

  execute(action: UseIgnitionEffectAction, choice: UseIgnitionEffectActionChoice, store: Store): void {
      const cardInstance = store.state.query.card.getByInstanceId(
        action.cardInstanceId
      )

      if (!cardInstance) return

      const effect = cardInstance.definition.effects[choice.payload.effectIndex]

      if (!effect) return

      store.dispatch(
        new ActivateIgnitionEffect({
          cardInstanceId: action.cardInstanceId,
          effectIndex: choice.payload.effectIndex
        })
      )
  }
}