import { IgnitionEffectCtx } from "./effect-context"

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

export interface TriggerEffect extends EffectBase {
  type: EffectType.TRIGGER
}

export interface ModifierEffect extends EffectBase {
  type: EffectType.MODIFIER
}

export interface IgnitionEffect extends EffectBase {
  type: EffectType.IGNITION
  execute: {
    explanation: string
    handler: (effectCtx: IgnitionEffectCtx) => void
  }
  requirements?: {
    explanation: string
    handler: () => void
  }
}

export type Effect = TriggerEffect | ModifierEffect | IgnitionEffect