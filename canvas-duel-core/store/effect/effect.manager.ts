import { IgnitionEffect } from "../../shared/cards/effect";
import { CardInstance } from "../state/entities/cards";
import { Store } from "../store";
import { Effect } from "./effect";
import { factoryEffectResolvers } from "./factories/effect-resolvers.factory";
import { factoryIgnitionEffectCtx } from "./factories/ignition-effect-ctx.factory";

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

    effect.execute.handler(factoryIgnitionEffectCtx({
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

    return effect.requirements.handler(factoryIgnitionEffectCtx({
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