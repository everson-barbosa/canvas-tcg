import { CardManager } from "../shared/cards/card.manager";
import { ActionManager } from "./action/action.manager";
import { EffectManager } from "./effect/effect.manager";
import { EventManager } from "./event/event.manager";
import { PromptManager } from "./prompt/prompt.manager";
import { StateManager } from "./state/state.manager";
import { StoreEngine } from "./store.engine";

export class Store {
  state: StateManager
  effect: EffectManager
  prompt: PromptManager
  action: ActionManager
  event: EventManager
  card: CardManager
  engine: StoreEngine

  constructor() {
    this.state = new StateManager()
    this.effect = new EffectManager()
    this.prompt = new PromptManager()
    this.action = new ActionManager()
    this.event = new EventManager()
    this.card = new CardManager()

    this.engine = new StoreEngine(this)
  }

  
}