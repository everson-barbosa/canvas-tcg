import { Orientation } from "../../../shared/cards/interfaces/orientation"

export interface Player {
  id: string
  deck: string[]
  hand: string[]
  trash: string[]
  orientation: Orientation.NORTH | Orientation.SOUTH
}

export type Players = Record<string, Player>