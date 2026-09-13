import { Orientation } from "../../../../shared/orientation";
import { Position } from "../../../../shared/position";
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

