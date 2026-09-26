import { Query } from "@core/store/state/queries/query"
import { DuelContext } from "@core/shared/context/duel.context"

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