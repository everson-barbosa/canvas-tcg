import { Query } from "../../../store/state/queries/query"
import { DuelContext } from "../../context/duel.context"

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