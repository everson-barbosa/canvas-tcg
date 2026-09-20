import { DuelEventType } from "../../../store/event/event.map"
import { 
  IgnitionEffectExecuteContext, 
  IgnitionEffectRequirementsContext 
} from "./ignition.effect-context"
import { 
  TriggerEffectExecuteContext, 
  TriggerEffectRequirementsContext 
} from "./trigger.effect-context"

export enum EffectProperty {
  IN_BOARD,
  IN_HAND,
  IN_GRAVE,
  ONCE_PER_TURN,
  YOUR_TURN,
  ENEMY_TURN,
  DISCARD
}

export enum EffectType {
  TRIGGER,
  IGNITION,
  MODIFIER
}

export interface EffectBase {
  properties: EffectProperty[]
}

export interface TriggerEffectDefinition<
  T extends DuelEventType
> extends EffectBase {

  type: EffectType.TRIGGER

  event: T

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

export type TriggerEffect = {
    [T in DuelEventType]: TriggerEffectDefinition<T>
}[DuelEventType]

export interface ModifierEffect extends EffectBase {
  type: EffectType.MODIFIER
}

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

export type Effect = TriggerEffect | ModifierEffect | IgnitionEffect