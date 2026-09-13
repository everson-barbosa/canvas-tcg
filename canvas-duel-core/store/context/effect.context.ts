import { Store } from "../store"
import { BoardEffectContext } from "./board-effect.context"

export class EffectContext {
  board: BoardEffectContext
  
  constructor(store: Store) {
    this.board = new BoardEffectContext(store)
  }

}