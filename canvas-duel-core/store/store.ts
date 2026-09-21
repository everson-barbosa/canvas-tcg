import { CardManager } from "../shared/cards/card.manager";
import { EffectType } from "../shared/cards/effects/effect";
import { ActionManager } from "./action/action.manager";
import { Effect } from "./effect/effect";
import { EffectManager } from "./effect/effect.manager";
import { DuelEvent } from "./event/event";
import { EventManager } from "./event/event.manager";
import { PromptManager } from "./prompt/prompt.manager";
import { StateManager } from "./state/state.manager";
import { DuelConfig, DuelStarter } from "./duel-starter";

export class Store {
  state: StateManager
  effect: EffectManager
  prompt: PromptManager
  action: ActionManager
  event: EventManager
  card: CardManager

  constructor() {
    this.state = new StateManager()
    this.effect = new EffectManager()
    this.prompt = new PromptManager()
    this.action = new ActionManager()
    this.event = new EventManager()
    this.card = new CardManager()
  }

  dispatch(effect: Effect) {
    this.effect.enqueue(effect)
    this.run()
  }

  getActions() {
    return this.action.getActions(this)
  }

  emit(event: DuelEvent) {
    const cards = this.state.query.card.list()

    for (const card of cards) {
      for (const effect of card.definition.effects) {
        if (effect.type !== EffectType.TRIGGER) continue;

        const canActivate = this.effect.canActivateTriggerEffect({
          cardInstance: card,
          effect,
          event,
          store: this
        })

        if (!canActivate) continue;

        this.effect.activateTriggerEffect({
          cardInstance: card,
          effect,
          event,
          store: this
        })
      }
    }
  }

  starter(config: DuelConfig) {
    DuelStarter.start({
      config,
      store: this,
    })
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