import { Effect } from "../../effect"
import { ShuffleDeckEffectType } from "./shuffle-deck.effect-type"

interface ShuffleDeckEffectPayload {
  readonly playerId: string
}

export class ShuffleDeckEffect extends Effect<ShuffleDeckEffectPayload> {
  type = ShuffleDeckEffectType
}
