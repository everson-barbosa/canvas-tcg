import { ActionManager } from "./action/action.manager";
import { Effect } from "./effect/effect";
import { EffectManager } from "./effect/effect.manager";
import { EventManager } from "./event/event.manager";
import { PromptManager } from "./prompt/prompt.manager";
import { StateManager } from "./state/state.manager";

export class Store {
  state: StateManager
  effect: EffectManager
  prompt: PromptManager
  action: ActionManager
  event: EventManager

  constructor() {
    this.state = new StateManager()
    this.effect = new EffectManager()
    this.prompt = new PromptManager()
    this.action = new ActionManager()
    this.event = new EventManager()
  }

  dispatch(effect: Effect) {
    this.effect.enqueue(effect)
    this.run()
  }

  getActions() {
    return this.action.getActions(this)
  }

  joinToGame() {
    
  }

  private run() {
    while (
      this.effect.hasEffect() && 
      !this.prompt.hasPrompts()) {
        const effect = this.effect.dequeue()!

        this.effect.resolve(effect, this)
    }
  }
}