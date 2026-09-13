import { Store } from "../store";
import { Effect } from "./effect";
import { factoryEffectResolvers } from "./factories/factory-effect-resolvers";

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

  resolve<T>(effect: Effect, store: Store) {
    const resolver = this.resolvers.get(effect.type);

    if (!resolver) {
      console.warn("Effect resolver not found")
      return
    }

    resolver.resolve(effect, store);
  }
}