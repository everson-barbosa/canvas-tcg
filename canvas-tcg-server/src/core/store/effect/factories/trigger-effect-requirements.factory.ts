import { TriggerEffectRequirementsContext } from "../../../shared/cards/effects/trigger.effect-context"
import { DuelEvent } from "../../event/event"
import { CardInstance } from "../../state/entities/cards"
import { Store } from "../../store"

export function factoryTriggerEffectRequirements(props: {
  store: Store
  cardInstance: CardInstance
  event: DuelEvent
}): TriggerEffectRequirementsContext<any> {
  const { cardInstance, event, store } = props

  const myId = cardInstance.ownerId
  const enemy = store.state.query.player.getEnemy(myId)!
  const enemyId = enemy.id

  return {
    event,
    query: store.state.query,
    myId,
    enemyId
  }
}