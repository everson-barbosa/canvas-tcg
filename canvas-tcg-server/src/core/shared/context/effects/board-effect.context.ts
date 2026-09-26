import { ChangeOrientationEffect } from "@core/store/effect/effects/change-orientation/change-orientation.effect"
import { Store } from "@core/store/store"
import { Orientation } from "@core/shared/cards/interfaces/orientation"

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