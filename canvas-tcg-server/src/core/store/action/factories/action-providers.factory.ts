import { ActionProvider } from "../action.provider"
import { ActionProviders } from "../constants/action.providers"

export function factoryActionProviders() {
  const providers: ActionProvider[] = []
 
  ActionProviders.forEach(ActionProvider => {
    const provider = new ActionProvider()
  
    providers.push(provider)
  })

  return providers
}