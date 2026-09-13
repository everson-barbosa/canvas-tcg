import { Prompt, PromptProps } from "../../prompt";
import { SelectCardPromptType } from "./select-card.prompt-type";

interface SelectCardPromptProps extends PromptProps {
  cardInstanceIds: string[]
}

export class SelectCardPrompt extends Prompt {
  type = SelectCardPromptType
  cardInstanceIds: string[]

  constructor(
    props: SelectCardPromptProps
  ) {
    super(props)

    this.cardInstanceIds = props.cardInstanceIds
  }
}

