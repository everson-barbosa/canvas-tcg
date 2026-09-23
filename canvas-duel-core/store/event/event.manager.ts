import { Store } from "../store";
import { DuelEvent } from "./event";
import { factoryEventHandlers } from "./factories/event-handlers.factory";

export class EventManager {
  handlers = factoryEventHandlers()

  emit(event: DuelEvent, store: Store) {
    for (const handler of this.handlers) {
      console.log(handler, event)

      if (handler.type === event.type) {
        handler.handle(event, store)
      }
    }
  }
}