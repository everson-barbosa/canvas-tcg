import { ActorPlayedEvent } from "./events/actor-played/actor-played.event";
import { ChangedPositionEvent } from "./events/changed-position/changed-position.event";
import { DeclaredAttackEvent } from "./events/declared-attack/declared-attack.event";

export interface DuelEventMap {
  "ACTOR_PLAYED": ActorPlayedEvent,
  "CHANGED_POSITION": ChangedPositionEvent,
  "DECLARED_ATTACK": DeclaredAttackEvent
}

export type DuelEventType = keyof DuelEventMap