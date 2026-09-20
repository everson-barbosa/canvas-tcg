import { Effect } from "../../effect";
import { DrawCardEffectType } from "./draw-card.effect-type";

interface DrawCardEffectPayload {
  playerId: string
  amount: number
}

export class DrawCardEffect extends Effect<DrawCardEffectPayload> {
  type = DrawCardEffectType
}