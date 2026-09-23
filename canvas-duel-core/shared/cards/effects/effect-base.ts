export enum EffectProperty {
  ONCE_PER_TURN,
}

export enum EffectType {
  TRIGGER,
  IGNITION,
  MODIFIER
}

export interface EffectBase {
  type: EffectType
  properties?: EffectProperty[]
}
