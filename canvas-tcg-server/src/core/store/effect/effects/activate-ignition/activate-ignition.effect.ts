import { Effect } from "../../effect"
import { ActivateIgnitionEffectType } from "./activate-ignition.effect-type"


interface ActivateIgnitionEffectPayload {
  readonly cardInstanceId: string
  readonly effectIndex: number
}

export class ActivateIgnitionEffect extends Effect<ActivateIgnitionEffectPayload> {
  type = ActivateIgnitionEffectType
}
