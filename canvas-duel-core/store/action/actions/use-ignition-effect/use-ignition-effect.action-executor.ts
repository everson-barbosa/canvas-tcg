import { PlayActorEffect } from "../../../effect/effects/play-actor/play-actor.effect";
import { Store } from "../../../store";
import { ActionExecutor } from "../../action.executor";
import { UseIgnitionEffectAction } from "./use-ignition-effect.action";
import { UseIgnitionEffectActionChoice } from "./use-ignition-effect.action-choice";
import { UseIgnitionEffectActionType } from "./use-ignition-effect.action-type";

export class PlayActorActionExecutor extends ActionExecutor {
  type = UseIgnitionEffectActionType

  execute(action: UseIgnitionEffectAction, choice: UseIgnitionEffectActionChoice, store: Store): void {
      
  }
}