import { Orientation } from "../../../shared/orientation";
import { Position } from "../../../shared/position";
import { QueryBase } from "./query-base";

export class BoardQuery extends QueryBase {
  list() {
    return Object.values(this.state.board.cards)
  }

  getCardByInstanceId(cardInstanceId: string) {
    return this.state.board.cards[cardInstanceId] ?? null
  }

  isPositionOccupied(position: Position) {
    const hasBlockInPosition = this.state.board.blockedPositions.some(blockedPosition => 
      blockedPosition.x === position.x && blockedPosition.y === position.y
    )

    if (hasBlockInPosition) return true

    const hasCardInPosition = Object.values(this.state.board.cards).some(card => 
      card.state.position.x === position.x && card.state.position.y === position.y
    )

    if (hasCardInPosition) return true

    return false
  }

  getAvailableOrientationByPlayerId(playerId: string): Orientation[] {
    return [
      Orientation.NORTH, 
      Orientation.EAST, 
      Orientation.SOUTH, 
      Orientation.WEST
    ]
  }

  getAvailablePositionsByPlayerId(playerId: string): Position[] {
    return []
  }
}