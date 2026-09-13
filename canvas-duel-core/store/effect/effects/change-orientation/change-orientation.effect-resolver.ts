import { Store } from "../../../store";
import { EffectResolver } from "../../effect.resolver";
import { ChangeOrientationEffect } from "./change-orientation.effect";
import { ChangeOrientationEffectType } from "./change-orientation.effect-type";


export class ChangeOrientationEffectResolver extends EffectResolver<ChangeOrientationEffect> {
  type = ChangeOrientationEffectType

  resolve(effect: ChangeOrientationEffect, store: Store): void {
    const { cardInstanceId, orientation } = effect.payload

    const cardInBoard = store.stateManager.query.board.getCardByInstanceId(cardInstanceId)

    if (!cardInBoard) return

    store.stateManager.command.board.changeOrientation({
      cardInBoard,
      orientation
    })
  }
}