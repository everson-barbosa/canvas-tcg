import { Store } from "../../../store";
import { EffectResolver } from "../../effect.resolver";
import { MoveCardEffect } from "./move-card.effect";
import { MoveCardEffectType } from "./move-card.effect-type";

export class MoveCardEffectResolver extends EffectResolver<MoveCardEffect> {
  type = MoveCardEffectType

  resolve(effect: MoveCardEffect, store: Store) {
    const { cardInstanceId, position } = effect.payload

    const cardInBoard = store.stateManager.query.board.getCardByInstanceId(cardInstanceId)

    if (!cardInBoard) return

    const isPositionOccupied = store.stateManager.query.board.isPositionOccupied(position)

    if (isPositionOccupied) return

    store.stateManager.command.board.changePosition({
      cardInBoard,
      position
    })
  }
}