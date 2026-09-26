import { Store } from "../store";
import { Action } from "./action";
import { ActionChoice } from "./action.choice";
import { factoryActionExecutors } from "./factories/action-executors.factory";
import { factoryActionMatchers } from "./factories/action-matchers.factory";
import { factoryActionProviders } from "./factories/action-providers.factory";

export class ActionManager {
  executors = factoryActionExecutors()
  matchers = factoryActionMatchers()
  providers = factoryActionProviders()

  getAction(store: Store, choice: ActionChoice) {
    const actions = this.getActions(store);

    return actions.find((action) => {
      const isMatchType = action.type === choice.type;
      const isMatchOwnerId = action.ownerId === choice.ownerId;
      const matcher = this.matchers.get(action.type)

      if (matcher && isMatchType && isMatchOwnerId) {
        return matcher.matches(action, choice);
      }

      return false;
    });
  }

  getActions(store: Store) {
    const actions: Action[] = []

    this.providers.forEach(provider => {
      actions.push(...provider.provide(store))
    })

    return actions
  }

  execute(store: Store, choice: ActionChoice) {
    const action = this.getAction(store, choice);

    if (!action) {
      throw new Error("Action not found");
    }

    const executor = this.executors.get(choice.type)

    if (!executor) {
      throw new Error("Executor not found");
    }

    executor.execute(action, choice, store);
  }
}