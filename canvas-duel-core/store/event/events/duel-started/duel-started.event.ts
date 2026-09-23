import { DuelEvent } from "../../event";
import { DuelStartedEventType } from "./duel-started.event-type";

interface DuelStartedEventPayload {}

export class DuelStartedEvent extends DuelEvent<DuelStartedEventPayload> {
  type = DuelStartedEventType

  constructor() {
    super({})
  }
}