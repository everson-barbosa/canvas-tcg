import { CardType } from "../../../../shared/cards/card";
import { Store } from "../../../store";
import { ActionProvider } from "../../action.provider";
import { PlayActorAction } from "./play-actor.action";

export class PlayActorActionProvider extends ActionProvider<PlayActorAction> {
  provide(store: Store): PlayActorAction[] {
    const actions: PlayActorAction[] = []

    const activePlayerId = store.stateManager.query.turn.getActivePlayer()

    if (!activePlayerId) return actions

    const cardsInstanceIds = store.stateManager.query.player.hand.listByPlayerId(activePlayerId)

    if (cardsInstanceIds.length === 0) return actions

    const cards = store.stateManager.query.card.listByIds(cardsInstanceIds)

    cards.forEach(card => {
      const isActor = card.definition.type === CardType.ACTOR

      if (isActor) {
        const availableOrientations = 
          store.stateManager.query.board.getAvailableOrientationByPlayerId(activePlayerId)

        const availablePositions = 
          store.stateManager.query.board.getAvailablePositionsByPlayerId(activePlayerId)

        actions.push(
          new PlayActorAction({
            ownerId: card.ownerId,
            cardInstanceId: card.cardInstanceId,
            availableOrientations,
            availablePositions
          })
        )
      }
    })

    return actions
  }
}