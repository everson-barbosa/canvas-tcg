export abstract class DuelEvent<Payload = unknown> {
  abstract type: string
  
  constructor(public payload: Payload) {}
}