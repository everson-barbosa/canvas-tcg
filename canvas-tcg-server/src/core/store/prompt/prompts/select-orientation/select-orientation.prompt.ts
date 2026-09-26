import { Orientation } from "../../../../shared/cards/interfaces/orientation";
import { Prompt, PromptProps } from "../../prompt";
import { SelectOrientationPromptType } from "./select-orientation.prompt-type";

interface SelectOrientationPromptProps extends PromptProps {
  orientations: Orientation[]
}

export class SelectOrientationPrompt extends Prompt {
  type = SelectOrientationPromptType
  orientations: Orientation[]

  constructor(
    props: SelectOrientationPromptProps
  ) {
    super(props)

    this.orientations = props.orientations
  }
}

