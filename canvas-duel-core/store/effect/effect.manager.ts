import { IgnitionEffect, TriggerEffect } from "../../shared/cards/effects/effect";
import { DuelEvent } from "../event/event";
import { CardInstance } from "../state/entities/cards";
import { Store } from "../store";
import { Effect } from "./effect";
import { factoryEffectResolvers } from "./factories/effect-resolvers.factory";
import { factoryIgnitionEffectExecute } from "./factories/ignition-effect-execute.factory";
import { factoryIgnitionEffectRequirements } from "./factories/ignition-effect-requirements.factory";
import { factoryTriggerEffectExecute } from "./factories/trigger-effect-execute.factory";
import { factoryTriggerEffectRequirements } from "./factories/trigger-effect-requirements.factory";

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

  activateTriggerEffect(props: {
    cardInstance: CardInstance
    effect: IgnitionEffect
    event: DuelEvent
    store: Store
  }) {
    const { cardInstance, effect, event, store } = props

    effect.execute.handler(factoryTriggerEffectExecute({
      cardInstance,
      event,
      store
    }))
  }

  canActivateIgnitionEffect(props: {
    cardInstance: CardInstance
    effect: IgnitionEffect
    store: Store
  }): boolean {
    const { cardInstance, effect, store } = props

    if (!effect?.requirements) return false

    return effect.requirements.handler(factoryIgnitionEffectRequirements({
      cardInstance,
      store
    }))
  }

  canActivateTriggerEffect(props: {
    cardInstance: CardInstance
    effect: TriggerEffect
    store: Store
    event: DuelEvent
  }): boolean {
    const { cardInstance, effect, event, store } = props

    if (!effect?.requirements) return false

    return effect.requirements.handler(factoryTriggerEffectRequirements({
      cardInstance,
      store,
      event
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