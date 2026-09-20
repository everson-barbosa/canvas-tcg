import { Position } from "../../../shared/cards/interfaces/position";
import { DuelEvent } from "../event";

interface ChangedPositionEventPayload {
  cardInstanceId: string
  ownerId: string
  position: Position
}

export class ChangedPositionEvent extends DuelEvent<ChangedPositionEventPayload> {
  type = "CHANGED_POSITION_EVENT";
}