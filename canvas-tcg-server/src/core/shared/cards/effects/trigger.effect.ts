import { EffectBase, EffectType } from "./effect-base";
import { TriggerEffectExecuteContext, TriggerEffectRequirementsContext } from './trigger.effect-context'
import { DuelEventType } from "@core/store/event/event.map";

interface TriggerEffectBase<T extends DuelEventType = DuelEventType>
  extends EffectBase {

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

interface AttackTriggerEffect extends TriggerEffectBase<"DECLARED_ATTACK"> {
  event: "ATTACK" 
}
 
export type TriggerEffect = AttackTriggerEffect
