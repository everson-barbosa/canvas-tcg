interface ActionChoiceProps<Payload = unknown> {
  ownerId: string
  payload: Payload
}

export abstract class ActionChoice<Payload = unknown> {
  abstract type: string
  ownerId: string
  payload: Payload

  constructor(props: ActionChoiceProps<Payload>) {
    this.payload = props.payload
    this.ownerId = props.ownerId
  }
}