import { Position } from "../../../shared/cards/interfaces/position";
import { DuelEvent } from "../event";

interface DeclaredAttackEventPayload {
  cardInstanceId: string
  ownerId: string
  position: Position
}

export class DeclaredAttackEvent extends DuelEvent<DeclaredAttackEventPayload> {
  type = "DECLARED_ATTACK_EVENT";
}