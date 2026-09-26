import { PromptResolver } from "../../prompt.resolver";
import { SelectOrientationPrompt } from "./select-orientation.prompt";
import { SelectOrientationPromptAnswer } from "./select-orientation.prompt-answer";
import { SelectOrientationPromptResponse } from "./select-orientation.prompt-response";
import { SelectOrientationPromptType } from "./select-orientation.prompt-type";

export class SelectOrientationPromptResolver extends PromptResolver<
  SelectOrientationPrompt, 
  SelectOrientationPromptAnswer,
  SelectOrientationPromptResponse
> {
  type = SelectOrientationPromptType

  resolve(props: {
    prompt: SelectOrientationPrompt,
    answer: SelectOrientationPromptAnswer
  }): SelectOrientationPromptResponse {
    const { prompt, answer } = props

    const isOrientationAvailable = prompt.orientations.includes(answer.orientation)

    if (!isOrientationAvailable) {
      throw new Error("Orientation is not available to select")
    }

    return {
      orientation: answer.orientation
    }
  }
}