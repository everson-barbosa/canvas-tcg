import { Orientation } from "../../../../shared/cards/interfaces/orientation";
import { Position } from "../../../../shared/cards/interfaces/position";
import { Action, ActionProps } from "../../action";
import { PlayActorActionType } from "./play-actor.action-type";

interface PlayActorActionProps extends ActionProps {
  cardInstanceId: string
  availablePositions: Position[]
  availableOrientations: Orientation[]
}

export class PlayActorAction extends Action {
  type = PlayActorActionType
  cardInstanceId: string
  availablePositions: Position[]
  availableOrientations: Orientation[]

  constructor(props: PlayActorActionProps) {
    super(props)

    this.cardInstanceId = props.cardInstanceId
    this.availablePositions = props.availablePositions
    this.availableOrientations = props.availableOrientations
  }
}