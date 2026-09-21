import { State } from "../state";
import { BoardCommand } from "./board.command";
import { CardCommand } from "./card.command";
import { PhaseCommand } from "./phase.command";
import { PlayerCommand } from "./player.command";
import { TurnCommand } from "./turn.command";

export class Command {
  board: BoardCommand
  card: CardCommand
  phase: PhaseCommand
  player: PlayerCommand
  turn: TurnCommand

  constructor(state: State) {
    this.board = new BoardCommand(state)
    this.card = new CardCommand(state)
    this.phase = new PhaseCommand(state)
    this.player = new PlayerCommand(state)
    this.turn = new TurnCommand(state)
  }
}