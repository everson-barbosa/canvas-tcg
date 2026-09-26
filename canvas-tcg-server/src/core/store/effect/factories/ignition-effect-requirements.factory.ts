import { IgnitionEffectRequirementsContext } from "../../../shared/cards/effects/ignition.effect-context"
import { CardInstance } from "../../state/entities/cards"
import { Store } from "../../store"

export function factoryIgnitionEffectRequirements(props: {
  store: Store
  cardInstance: CardInstance
}): IgnitionEffectRequirementsContext {
  const { cardInstance, store } = props

  const myId = cardInstance.ownerId
  const enemy = store.state.query.player.getEnemy(myId)!
  const enemyId = enemy.id

  return {
    query: store.state.query,
    myId,
    enemyId
  }
}