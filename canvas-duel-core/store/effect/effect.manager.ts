import { IgnitionEffect } from "../../shared/cards/effects/effect";
import { CardInstance } from "../state/entities/cards";
import { Store } from "../store";
import { Effect } from "./effect";
import { factoryEffectResolvers } from "./factories/effect-resolvers.factory";
import { factoryIgnitionEffectExecute } from "./factories/ignition-effect-execute.factory";
import { factoryIgnitionEffectRequirements } from "./factories/ignition-effect-requirements.factory";

export class EffectManager {
  queue: Effect[] = [];
  resolvers = factoryEffectResolvers()
  
  /**
   * Add effect to queue
   */
  enqueue(effect: Effect) {
    this.queue.push(effect);
  }

  /**
   * Add effect to queue
   */
  dequeue() {
    return this.queue.shift();
  }

  hasEffect() {
    return this.queue.length > 0;
  }

  activateIgnitionEffect(props: {
    cardInstance: CardInstance
    effect: IgnitionEffect
    store: Store
  }) {
    const { cardInstance, effect, store } = props

    effect.execute.handler(factoryIgnitionEffectExecute({
      cardInstance,
      store
    }))
  }

  canActivateIgnitionEffect(props: {
    cardInstance: CardInstance
    effect: IgnitionEffect
    store: Store
  }) {
    const { cardInstance, effect, store } = props

    if (!effect?.requirements) return

    return effect.requirements.handler(factoryIgnitionEffectRequirements({
      cardInstance,
      store
    }))
  }

  resolve(effect: Effect, store: Store) {
    const resolver = this.resolvers.get(effect.type);

    if (!resolver) {
      console.warn("Effect resolver not found")
      return
    }

    resolver.resolve(effect, store);
  }
}