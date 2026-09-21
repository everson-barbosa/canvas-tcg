import { TriggerEffectExecuteContext } from "../../../shared/cards/effects/trigger.effect-context";
import { factoryDuelContext } from "../../context/factories/duel-context.factory";
import { DuelEvent } from "../../event/event";
import { CardInstance } from "../../state/entities/cards";
import { Store } from "../../store";

export function factoryTriggerEffectExecute(props: {
  store: Store
  cardInstance: CardInstance
  event: DuelEvent
}): TriggerEffectExecuteContext<any> {
  const { cardInstance, event, store } = props

  const myId = cardInstance.ownerId
  const enemy = store.state.query.player.getEnemy(myId)!
  const enemyId = enemy.id

  return {
    duel: factoryDuelContext(store),
    event,
    myId,
    enemyId
  }
}