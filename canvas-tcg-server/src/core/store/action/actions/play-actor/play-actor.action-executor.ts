import { PlayActorEffect } from "../../../effect/effects/play-actor/play-actor.effect";
import { Store } from "../../../store";
import { ActionExecutor } from "../../action.executor";
import { PlayActorAction } from "./play-actor.action";
import { PlayActorActionChoice } from "./play-actor.action-choice";
import { PlayActorActionType } from "./play-actor.action-type";

export class PlayActorActionExecutor extends ActionExecutor {
  type = PlayActorActionType

  execute(action: PlayActorAction, choice: PlayActorActionChoice, store: Store): void {
      store.dispatch(
        new PlayActorEffect({
          cardInstanceId: choice.payload.cardInstanceId,
          ownerId: action.ownerId,
          position: choice.payload.position,
          orientation: choice.payload.orientation,
        })
      )
  }
}