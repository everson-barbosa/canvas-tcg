
import { Query } from "../../store/state/queries/query";
import { Store } from "../../store/store";
import { EffectContext } from "./effect.context";
import { PromptContext } from "./prompt.context";

export class DuelContext {
  prompt: PromptContext
  effect: EffectContext
  query: Query

  constructor(store: Store) {
    this.prompt = new PromptContext(store)
    this.effect = new EffectContext(store)
    this.query = new Query(store.state.getState())
  }
}

