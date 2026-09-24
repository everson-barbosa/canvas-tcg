import { Effect } from "../../effect"
import { ShuffleDeckEffectType } from "./shuffle-deck.effect-type"

interface ShuffleDeckEffectPayload {
  readonly ownerId: string
}

export class ShuffleDeckEffect extends Effect<ShuffleDeckEffectPayload> {
  type = ShuffleDeckEffectType
}
