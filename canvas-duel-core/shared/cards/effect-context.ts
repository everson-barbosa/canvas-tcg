import { DuelContext } from "../../store/context/duel.context";

export interface EffectCtx {
  duel: DuelContext
  myId: string
  enemyId: string

}

export interface IgnitionEffectCtx extends EffectCtx {
  
}

export interface TriggerEffectCtx extends EffectCtx {

}