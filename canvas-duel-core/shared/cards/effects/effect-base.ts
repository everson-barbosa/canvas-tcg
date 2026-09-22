export enum EffectType {
  TRIGGER,
  IGNITION,
  MODIFIER
}

export interface EffectBase {
  type: EffectType
}
