import { Orientation } from "../../../../shared/cards/interfaces/orientation";
import { Position } from "../../../../shared/cards/interfaces/position";
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