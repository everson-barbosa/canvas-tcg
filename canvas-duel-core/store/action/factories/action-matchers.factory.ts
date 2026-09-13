import { ActionMatcher } from "../action.matcher"
import { ActionMatchers } from "../action.matchers"

export function factoryActionMatchers() {
  const matcher = new Map<string, ActionMatcher>()
  
  ActionMatchers.forEach(ActionMatcher => {
    const provider = new ActionMatcher()
  
    matcher.set(provider.type, provider)
  })

  return matcher
}