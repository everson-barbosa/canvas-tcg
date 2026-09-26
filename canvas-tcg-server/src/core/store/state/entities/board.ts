import { Orientation } from "../../../shared/cards/interfaces/orientation"
import { Position } from "../../../shared/cards/interfaces/position"

export enum Ailment {
  POISON,
  BURN,
  PARALIZE
}

interface CardInBoardActions {
  attacks: number
  moviments: number
  rotations: number
}

interface CardInBoardState {
  ownerId: string
  position: Position
  orientation: Orientation
  ailment: Ailment | null
  damage: number
}

export interface CardInBoard {
  cardInstanceId: string
  state: CardInBoardState
  actions: CardInBoardActions
}

export interface Board {
  cards: Record<string, CardInBoard>
  blockedPositions: Position[]
}