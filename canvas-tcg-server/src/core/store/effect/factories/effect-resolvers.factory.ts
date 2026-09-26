import { EffectResolver } from "../effect.resolver"
import { EffectResolvers } from "../constants/effect.resolvers"

export function factoryEffectResolvers() {
  const resolvers = new Map<string, EffectResolver>()

  EffectResolvers.forEach(EffectResolver => {
    const resolver = new EffectResolver()
  
    resolvers.set(resolver.type, resolver)
  })

  return resolvers
}