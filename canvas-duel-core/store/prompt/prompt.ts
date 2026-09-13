import { v4 as uuidv4 } from 'uuid';

export interface PromptProps {
  ownerId: string
}

export abstract class Prompt {
  id: string
  ownerId: string
  abstract type: string

  constructor(props: PromptProps) {
    this.id = uuidv4()
    this.ownerId = props.ownerId
  }
}