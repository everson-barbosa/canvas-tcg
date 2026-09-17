import { Orientation } from "../../../../shared/orientation";
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

