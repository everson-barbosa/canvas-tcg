import { DuelContext } from "../../../store/context/duel.context"
import { Query } from "../../../store/state/queries/query"

export interface EffectExecuteContext {
  duel: DuelContext
  myId: string
  enemyId: string
}

export interface EffectRequirementContext {
  query: Query
  myId: string
  enemyId: string
}