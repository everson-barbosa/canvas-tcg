import { IgnitionEffectCtx } from "../../../shared/cards/effect-context";
import { factoryDuelContext } from "../../context/factories/duel-context.factory";
import { CardInstance } from "../../state/entities/cards";
import { Store } from "../../store";

export function factoryIgnitionEffectCtx(props: {
  store: Store
  cardInstance: CardInstance
}): IgnitionEffectCtx {
  const { cardInstance, store } = props

  const myId = cardInstance.ownerId
  const enemy = store.stateManager.query.player.getEnemy(myId)!
  const enemyId = enemy.id

  return {
    duel: factoryDuelContext(store),
    myId,
    enemyId
  }
}