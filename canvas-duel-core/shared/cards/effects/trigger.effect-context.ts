import { DuelEventMap, DuelEventType } from "../../../store/event/event.map";
import { EffectExecuteContext, EffectRequirementContext } from "./effect-context";

export interface TriggerEffectExecuteContext<T extends DuelEventType>
  extends EffectExecuteContext {
  event: DuelEventMap[T]
}

export interface TriggerEffectRequirementsContext<T extends DuelEventType>
  extends EffectRequirementContext {
  event: DuelEventMap[T]
}