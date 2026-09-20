import { State } from "../state";
import { BoardCommand } from "./board.command";
import { PhaseCommand } from "./phase.command";
import { PlayerCommand } from "./player.command";

export class Command {
  board: BoardCommand
  phase: PhaseCommand
  player: PlayerCommand

  constructor(state: State) {
    this.board = new BoardCommand(state)
    this.phase = new PhaseCommand(state)
    this.player = new PlayerCommand(state)
  }
}