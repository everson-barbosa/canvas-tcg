import { Board } from "./entities/board"
import { Cards } from "./entities/cards"
import { Phase } from "./entities/phase"
import { Players } from "./entities/player"
import { Turn } from "./entities/turn"

export interface State {
  turn: Turn
  board: Board
  phase: Phase
  players: Players
  cards: Cards
}