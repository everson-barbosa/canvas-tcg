import { ActionChoice } from "../../action.choice";
import { UseIgnitionEffectActionType } from "./use-ignition-effect.action-type";

interface UseIgnitionEffectActionChoicePayload {
  cardInstanceId: string
  effectIndex: number
}

export class UseIgnitionEffectActionChoice extends ActionChoice<UseIgnitionEffectActionChoicePayload> {
  type = UseIgnitionEffectActionType
}