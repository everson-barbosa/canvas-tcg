import { DuelEvent } from "../../../store/event/event";
import { DeclaredAttackEvent } from "../../../store/event/events/declared-attack.event";
import { EffectBase, EffectType } from "./effect-base";
import { TriggerEffectExecuteContext, TriggerEffectRequirementsContext } from './trigger.effect-context'

interface TriggerEffectBase<T = DuelEvent> extends EffectBase {
  type: EffectType.TRIGGER
  execute: {
    explanation: string
    handler: (
      effectContext: TriggerEffectExecuteContext<T>
    ) => void
  }
  requirements?: {
    explanation: string
    handler: (
      effectContext: TriggerEffectRequirementsContext<T>
    ) => boolean
  }
}

interface AttackTriggerEffect extends TriggerEffectBase<DeclaredAttackEvent> {
  event: "ATTACK" 
}
 
export type TriggerEffect = AttackTriggerEffect
