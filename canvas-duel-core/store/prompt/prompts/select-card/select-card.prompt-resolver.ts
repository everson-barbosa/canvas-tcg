import { PromptResolver } from "../../prompt.resolver";
import { SelectCardPrompt } from "./select-card.prompt";
import { SelectCardPromptAnswer } from "./select-card.prompt-answer";
import { SelectCardPromptResponse } from "./select-card.prompt-response";
import { SelectCardPromptType } from "./select-card.prompt-type";

export class SelectCardPromptResolver extends PromptResolver<
  SelectCardPrompt, 
  SelectCardPromptAnswer,
  SelectCardPromptResponse
> {
  type = SelectCardPromptType

  resolve(props: {
    prompt: SelectCardPrompt,
    answer: SelectCardPromptAnswer
  }): SelectCardPromptResponse | null {
    const { prompt, answer } = props

    const isCardAvailable = prompt.cardInstanceIds.includes(answer.cardInstanceId)

    if (!isCardAvailable) return null

    return answer.cardInstanceId
  }
}