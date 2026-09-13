import { SelectCardPrompt } from "../prompt/prompts/select-card/select-card.prompt";
import { SelectCardPromptResponse } from "../prompt/prompts/select-card/select-card.prompt-response";
import { Store } from "../store";

export class PromptContext {
  private store: Store

  constructor(store: Store) {
    this.store = store
  }

  selectCard(props: { 
    readonly cardInstanceIds: string[]
    readonly ownerId: string
    readonly callback: (response: SelectCardPromptResponse) => void
  }) {
    const { cardInstanceIds, ownerId, callback } = props

    this.store.promptManager.push({
      prompt: new SelectCardPrompt({
        cardInstanceIds,
        ownerId,
      }),
      callback,
    })
  }
}
