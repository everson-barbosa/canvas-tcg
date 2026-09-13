import { Orientation } from "../../../../shared/orientation";
import { Position } from "../../../../shared/position";
import { ActionChoice } from "../../action.choice";
import { PlayActorActionType } from "./play-actor.action-type";

interface PlayActorActionChoicePayload {
  cardInstanceId: string
  position: Position
  orientation: Orientation
}

export class PlayActorActionChoice extends ActionChoice<PlayActorActionChoicePayload> {
  type = PlayActorActionType
}