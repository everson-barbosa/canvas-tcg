import { ActorPlayedEvent } from "./events/actor-played.event";
import { ChangedPositionEvent } from "./events/changed-position.event";

export interface DuelEventMap {
  "ACTOR_PLAYED": ActorPlayedEvent,
  "CHANGED_POSITION": ChangedPositionEvent
}

export type DuelEventType = keyof DuelEventMap