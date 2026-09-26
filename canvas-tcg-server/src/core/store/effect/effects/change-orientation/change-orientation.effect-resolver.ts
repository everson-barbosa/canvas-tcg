import { Store } from "../../../store";
import { EffectResolver } from "../../effect.resolver";
import { ChangeOrientationEffect } from "./change-orientation.effect";
import { ChangeOrientationEffectType } from "./change-orientation.effect-type";


export class ChangeOrientationEffectResolver extends EffectResolver<ChangeOrientationEffect> {
  type = ChangeOrientationEffectType

  resolve(effect: ChangeOrientationEffect, store: Store): void {
    const { cardInstanceId, orientation } = effect.payload

    const cardInBoard = store.state.query.board.getCardByInstanceId(cardInstanceId)

    if (!cardInBoard) return

    store.state.command.board.changeOrientation({
      cardInBoard,
      orientation
    })
  }
}