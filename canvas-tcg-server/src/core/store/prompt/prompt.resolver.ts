import { Prompt } from "./prompt"

interface ResolverProps<Prompt, PromptAnswer> { 
  prompt: Prompt, 
  answer: PromptAnswer 
}

export abstract class PromptResolver<
  TPrompt = Prompt, 
  PromptAnswer = unknown, 
  PromptResponse = unknown
> {
  abstract type: string

  abstract resolve(props: ResolverProps<TPrompt, PromptAnswer>): PromptResponse
} 