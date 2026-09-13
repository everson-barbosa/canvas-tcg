import { factoryPromptResolvers } from "./factories/factory-resolvers";
import { Prompt } from "./prompt";

export class PromptManager {
  prompts: Map<string, Prompt> = new Map()
  callbacks: Map<string, Function> = new Map()
  resolvers = factoryPromptResolvers()

  push(props: {
    prompt: Prompt
    callback: Function
  }) {
    const { prompt, callback } = props

    this.prompts.set(prompt.id, prompt)
    this.callbacks.set(prompt.id, callback)
  }

  hasPrompts() {
    return this.prompts.size > 0
  }

  getPrompt(promptId: string) {
    return this.prompts.get(promptId) ?? null
  }

  resolve(prompt: Prompt, answer: any) {
    const resolver = this.resolvers.get(prompt.type)

    if (!resolver) {
      console.error('Prompt resolver not found')
      return
    }

    const response = resolver.resolve(answer)

    const callback = this.callbacks.get(prompt.id)

    if (callback) {
      callback(response)
      this.callbacks.delete(prompt.id)
    }
  }
} 