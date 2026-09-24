import { SelectCardPrompt } from "../../store/prompt/prompts/select-card/select-card.prompt"
import { SelectCardPromptResponse } from "../../store/prompt/prompts/select-card/select-card.prompt-response"
import { SelectOrientationPrompt } from "../../store/prompt/prompts/select-orientation/select-orientation.prompt"
import { SelectOrientationPromptResponse } from "../../store/prompt/prompts/select-orientation/select-orientation.prompt-response"
import { Store } from "../../store/store"
import { Orientation, Orientations } from "../cards/interfaces/orientation"


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

    this.store.prompt.push({
      prompt: new SelectCardPrompt({
        cardInstanceIds,
        ownerId,
      }),
      callback,
    })
  }

  selectOrientation(props: {
    readonly orientations?: Orientation[]
    readonly ownerId: string
    readonly callback: (response: SelectOrientationPromptResponse) => void
  }) {
    const { ownerId, callback } = props
    const orientations = props?.orientations ?? Orientations

    this.store.prompt.push({
      prompt: new SelectOrientationPrompt({
        orientations,
        ownerId
      }),
      callback,
    })
  }
}
