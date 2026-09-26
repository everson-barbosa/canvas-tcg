import { Position } from "../../../../shared/cards/interfaces/position";
import { DuelEvent } from "../../event";
import { ChangedPositionEventType } from "./changed-position.event-type";

interface ChangedPositionEventPayload {
  cardInstanceId: string
  ownerId: string
  position: Position
}

export class ChangedPositionEvent extends DuelEvent<ChangedPositionEventPayload> {
  type = ChangedPositionEventType;
}