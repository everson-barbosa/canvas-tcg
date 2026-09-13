export interface ActionProps {
  ownerId: string
}

export abstract class Action {
  abstract type: string
  ownerId: string

  constructor(props: ActionProps) {
    this.ownerId = props.ownerId
  }
}