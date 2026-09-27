import { EffectType } from "@core/shared/cards/effects/effect-base";
import { ActionChoice } from "./action/action.choice";
import { DuelEvent } from "./event/event";
import { Store } from "./store";
import { DuelConfig, StoreStarter } from "./store.starter";
import { Effect } from "./effect/effect";

export class StoreEngine {
  store: Store

  constructor(store: Store) {
    this.store = store
  }

  dispatch(effect: Effect) {
    this.store.effect.enqueue(effect)
    this.run()
  }

  getActions() {
    return this.store.action.getActions(this.store)
  }

  propagateEvent(event: DuelEvent) {
    const cards = this.store.state.query.card.list()

    for (const card of cards) {
      for (const effect of card.definition.effects) {
        if (effect.type !== EffectType.TRIGGER) continue;

        const canActivate = this.store.effect.canActivateTriggerEffect({
          cardInstance: card,
          effect,
          event,
          store: this.store
        })

        if (!canActivate) continue;

        this.store.effect.activateTriggerEffect({
          cardInstance: card,
          effect,
          event,
          store: this.store
        })
      }
    }

    this.store.event.emit(event, this.store)
  }

  perform(choice: ActionChoice) {
    this.store.action.execute(this.store, choice)
  }

  start(config: DuelConfig) {
    StoreStarter.start({
      config,
      store: this.store,
    })
  }  

  private run() {
    while (
      this.store.effect.hasEffect() && 
      !this.store.prompt.hasPrompts()) {
        const effect = this.store.effect.dequeue()!

        console.log(effect)

        this.store.effect.resolve(effect, this.store)
    }
  }
}