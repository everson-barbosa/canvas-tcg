import { EventHandlers } from "../constants/event.handlers"
import { EventHandler } from "../event.handler"

export function factoryEventHandlers() {
  const handlers: EventHandler[] = []
  
  EventHandlers.forEach(EventHandler => {
    const handler = new EventHandler()
  
    handlers.push(handler)
  })

  return handlers
}