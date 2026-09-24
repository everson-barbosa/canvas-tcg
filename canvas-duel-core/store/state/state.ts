import { Attacks } from "./entities/attack"
import { Board } from "./entities/board"
import { Cards } from "./entities/cards"
import { Phase } from "./entities/phase"
import { Players } from "./entities/player"
import { Turn } from "./entities/turn"

export interface State {
  attacks: Attacks
  board: Board
  cards: Cards
  phase: Phase
  players: Players
  turn: Turn
}