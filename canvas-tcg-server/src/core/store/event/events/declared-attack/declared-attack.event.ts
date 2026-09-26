import { Position } from "../../../../shared/cards/interfaces/position";
import { DuelEvent } from "../../event";
import { DeclaredAttackEventType } from "./declared-attack.event-type";

interface DeclaredAttackEventPayload {
  cardInstanceId: string
  ownerId: string
  position: Position
}

export class DeclaredAttackEvent extends DuelEvent<DeclaredAttackEventPayload> {
  type = DeclaredAttackEventType;
}