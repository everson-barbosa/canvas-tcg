import { DrawCardEffect } from "../../../store/effect/effects/draw-card/draw-card.effect"
import { Store } from "../../../store/store"


export class HandEffectContext {
  private store: Store
  
  constructor(store: Store) {
    this.store = store
  }
 
  draw(props: {
    playerId: string
    amount: number
  }) {
    const { playerId, amount } = props

    this.store.dispatch(
      new DrawCardEffect({
        playerId,
        amount
      })
    )
  }
}