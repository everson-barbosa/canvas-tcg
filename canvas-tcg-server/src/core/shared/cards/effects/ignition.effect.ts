import { EffectBase, EffectType } from "./effect-base"
import { IgnitionEffectExecuteContext, IgnitionEffectRequirementsContext } from "./ignition.effect-context"

export interface IgnitionEffect extends EffectBase {
  type: EffectType.IGNITION
  execute: {
    explanation: string
    handler: (effectContext: IgnitionEffectExecuteContext) => void
  }
  requirements?: {
    explanation: string
    handler: (effectContext: IgnitionEffectRequirementsContext) => boolean
  }
}