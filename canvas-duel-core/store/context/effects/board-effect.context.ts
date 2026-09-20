import { Orientation } from "../../../shared/cards/interfaces/orientation"
import { ChangeOrientationEffect } from "../../effect/effects/change-orientation/change-orientation.effect"
import { Store } from "../../store"

export class BoardEffectContext {
  private store: Store
  
  constructor(store: Store) {
    this.store = store
  }

  changeOrientation(props: {
    cardInstanceId: string
    orientation: Orientation
  }) {
    const { cardInstanceId, orientation } = props

    this.store.dispatch(
      new ChangeOrientationEffect({
        cardInstanceId,
        orientation,
      })
    )
  }
}