import { ActionMatcher } from "../../action.matcher";
import { UseIgnitionEffectAction } from "./use-ignition-effect.action";
import { UseIgnitionEffectActionChoice } from "./use-ignition-effect.action-choice";
import { UseIgnitionEffectActionType } from "./use-ignition-effect.action-type";

export class UseIgnitionEffectActionMatcher extends ActionMatcher<
  UseIgnitionEffectAction, 
  UseIgnitionEffectActionChoice
> {
  type = UseIgnitionEffectActionType

  matches(action: UseIgnitionEffectAction, choice: UseIgnitionEffectActionChoice): boolean {
    const isThisCard = action.cardInstanceId === choice.payload.cardInstanceId

    if (!isThisCard) return false

    const isThisEffect = action.effectIndex === choice.payload.effectIndex    

    return isThisEffect
  }
}