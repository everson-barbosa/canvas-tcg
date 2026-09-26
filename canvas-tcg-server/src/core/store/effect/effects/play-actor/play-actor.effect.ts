import { Orientation } from "../../../../shared/cards/interfaces/orientation";
import { Position } from "../../../../shared/cards/interfaces/position";
import { Effect } from "../../effect";
import { PlayActorEffectType } from "./play-actor.effect-type";

interface PlayActorEffectPayload {
  readonly cardInstanceId: string
  readonly ownerId: string
  readonly position: Position
  readonly orientation: Orientation
}

export class PlayActorEffect extends Effect<PlayActorEffectPayload> {
  type = PlayActorEffectType
}

