import { DuelEvent } from "../event";

interface DuelStartedEventPayload {}

export class DuelStartedEvent extends DuelEvent<DuelStartedEventPayload> {
  type = "DUEL_STARTED_EVENT"
}