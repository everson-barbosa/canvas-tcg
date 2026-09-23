import { EventHandlers } from "../constants/event.handlers"
import { EventHandler } from "../event.handler"

export function factoryEventHandlers() {
  const handlers = new Map<string, EventHandler>()
  
  EventHandlers.forEach(EventHandler => {
    const handler = new EventHandler()
  
    handlers.set(handler.type, handler)
  })

  return handlers
}