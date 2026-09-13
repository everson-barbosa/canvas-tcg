import { ActionMatcher } from "../../action.matcher";
import { PlayActorAction } from "./play-actor.action";
import { PlayActorActionChoice } from "./play-actor.action-choice";
import { PlayActorActionType } from "./play-actor.action-type";

export class PlayActorActionMatcher extends ActionMatcher<
  PlayActorAction, 
  PlayActorActionChoice
> {
  type = PlayActorActionType

  matches(action: PlayActorAction, choice: PlayActorActionChoice): boolean {
    const isThisCard = action.cardInstanceId === choice.payload.cardInstanceId

    if (!isThisCard) return false

    const isPositionAvailable = action.availablePositions.some(position => 
      position.x === choice.payload.position.x && position.y === choice.payload.position.y
    )

    if (!isPositionAvailable) return false

    const isOrientationAvailable = action.availableOrientations.includes(choice.payload.orientation)

    if (!isOrientationAvailable) return false

    return true
  }
}