export abstract class Effect<Payload = unknown> {
  abstract type: string

  constructor(public payload: Payload) {}
}