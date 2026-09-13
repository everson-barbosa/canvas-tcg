import { Orientation } from "../../../shared/orientation";
import { Position } from "../../../shared/position";
import { CardInBoard } from "../entities/board";
import { CommandBase } from "./command-base";

export class BoardCommand extends CommandBase {
  playCard(props: { 
    cardInstanceId: string, 
    ownerId: string
    orientation: Orientation,
    position: Position
  }) {
    const { cardInstanceId, ownerId, orientation, position } = props

    this.state.board.cards[cardInstanceId] = {
      cardInstanceId,
      actions: {
        attacks: 0,
        moviments: 0,
        rotations: 0
      },
      state: {
        ailment: null,
        damage: 0,
        orientation,
        position,
        ownerId
      }
    }
  }

  changePosition(props: {
    cardInBoard: CardInBoard, 
    position: Position
  }) {
    const { cardInBoard, position } = props

    this.state.board.cards[cardInBoard.cardInstanceId] = {
      ...cardInBoard,
      state: {
        ...cardInBoard.state,
        position,
      }
    } 
  }

  changeOrientation(props: {
    cardInBoard: CardInBoard, 
    orientation: Orientation
  }) {
    const { cardInBoard, orientation } = props

    this.state.board.cards[cardInBoard.cardInstanceId] = {
      ...cardInBoard,
      state: {
        ...cardInBoard.state,
        orientation,
      }
    } 
  }
}