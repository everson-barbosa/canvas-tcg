import { PromptResolver } from "../prompt.resolver"
import { PromptResolvers } from "../prompt.resolvers"

export function factoryResolvers() {
  const resolvers = new Map<string, PromptResolver>()

  PromptResolvers.forEach(PromptResolver => {
    const resolver = new PromptResolver()
  
    resolvers.set(resolver.type, resolver)
  })

  return resolvers
}