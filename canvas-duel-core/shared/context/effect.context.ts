import { Store } from "../../store/store"
import { BoardEffectContext } from "./effects/board-effect.context"
import { HandEffectContext } from "./effects/hand-effect.context"

export class EffectContext {
  board: BoardEffectContext
  hand: HandEffectContext
  
  constructor(store: Store) {
    this.board = new BoardEffectContext(store)
    this.hand = new HandEffectContext(store)
  }

}