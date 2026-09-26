import { Orientation } from "../../../../shared/cards/interfaces/orientation"
import { Effect } from "../../effect"
import { ChangeOrientationEffectType } from "./change-orientation.effect-type"


interface ChangeOrientationEffectPayload {
  readonly cardInstanceId: string
  readonly orientation: Orientation
}

export class ChangeOrientationEffect extends Effect<ChangeOrientationEffectPayload> {
  type = ChangeOrientationEffectType
}
