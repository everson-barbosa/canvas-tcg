import { Action, ActionProps } from "../../action";
import { UseIgnitionEffectActionType } from "./use-ignition-effect.action-type";

interface UseIgnitionEffectActionProps extends ActionProps {
  cardInstanceId: string
  effectIndex: number
}

export class UseIgnitionEffectAction extends Action {
  type = UseIgnitionEffectActionType
  cardInstanceId: string
  effectIndex: number

  constructor(props: UseIgnitionEffectActionProps) {
    super(props)

    this.cardInstanceId = props.cardInstanceId
    this.effectIndex = props.effectIndex
  }
}