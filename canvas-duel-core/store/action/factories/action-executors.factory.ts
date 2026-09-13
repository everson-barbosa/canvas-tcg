import { ActionExecutor } from "../action.executor"
import { ActionExecutors } from "../action.executors"


export function factoryActionExecutors() {
  const executors = new Map<string, ActionExecutor>()
  
  ActionExecutors.forEach(ActionExecutor => {
    const executor = new ActionExecutor()
  
    executors.set(executor.type, executor)
  })

  return executors
}