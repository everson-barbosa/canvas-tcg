import { ChangeOrientationEffectResolver } from "./effects/change-orientation/change-orientation.effect-resolver";
import { MoveCardEffectResolver } from "./effects/move-card/move-card.effect-resolver";
import { PlayActorEffectResolver } from "./effects/play-actor/play-actor.effect-resolver";

export const EffectResolvers = [
  PlayActorEffectResolver,
  MoveCardEffectResolver,
  ChangeOrientationEffectResolver
]