import { ActivateIgnitionEffectResolver } from "../effects/activate-ignition/activate-ignition.effect-resolver";
import { ChangeOrientationEffectResolver } from "../effects/change-orientation/change-orientation.effect-resolver";
import { DrawCardEffectResolver } from "../effects/draw-card/draw-card-effect-resolver";
import { MoveCardEffectResolver } from "../effects/move-card/move-card.effect-resolver";
import { PlayActorEffectResolver } from "../effects/play-actor/play-actor.effect-resolver";

export const EffectResolvers = [
  ActivateIgnitionEffectResolver,
  ChangeOrientationEffectResolver,
  DrawCardEffectResolver,
  PlayActorEffectResolver,
  MoveCardEffectResolver,
]