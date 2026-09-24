import { IgnitionEffectExecuteContext } from "../../../shared/cards/effects/ignition.effect-context";
import { factoryDuelContext } from "../../../shared/context/factories/duel-context.factory";
import { CardInstance } from "../../state/entities/cards";
import { Store } from "../../store";

export function factoryIgnitionEffectExecute(props: {
  store: Store
  cardInstance: CardInstance
}): IgnitionEffectExecuteContext {
  const { cardInstance, store } = props

  const myId = cardInstance.ownerId
  const enemy = store.state.query.player.getEnemy(myId)!
  const enemyId = enemy.id

  return {
    duel: factoryDuelContext(store),
    myId,
    enemyId
  }
}