import { ActionManager } from "./action/action.manager";
import { Effect } from "./effect/effect";
import { EffectManager } from "./effect/effect.manager";
import { PromptManager } from "./prompt/prompt.manager";
import { StateManager } from "./state/state.manager";

export class Store {
  stateManager: StateManager
  effectManager: EffectManager
  promptManager: PromptManager
  actionManager: ActionManager

  constructor() {
    this.stateManager = new StateManager()
    this.effectManager = new EffectManager()
    this.promptManager = new PromptManager()
    this.actionManager = new ActionManager()
  }

  dispatch(effect: Effect) {
    this.effectManager.enqueue(effect)
    this.run()
  }

  private run() {
    while (
      this.effectManager.hasEffect() && 
      !this.promptManager.hasPrompts()) {
        const effect = this.effectManager.dequeue()!

        this.effectManager.resolve(effect, this)
    }
  }
}