import { Orientation } from "../../../shared/cards/interfaces/orientation";
import { Position } from "../../../shared/cards/interfaces/position";
import { DuelEvent } from "../event";

interface ActorPlayedEventPayload {
  cardInstanceId: string
  ownerId: string
  position: Position
  orientation: Orientation
}

export class ActorPlayedEvent extends DuelEvent<ActorPlayedEventPayload> {
  type = "ACTOR_PLAYED_EVENT";
}