import { Position } from "../../../../shared/cards/interfaces/position";
import { Effect } from "../../effect";
import { MoveCardEffectType } from "./move-card.effect-type";

interface MoveCardEffectPayload {
  readonly cardInstanceId: string
  readonly position: Position
}

export class MoveCardEffect extends Effect<MoveCardEffectPayload> {
  type = MoveCardEffectType
}

