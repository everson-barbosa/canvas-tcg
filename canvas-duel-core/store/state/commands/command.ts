import { State } from "../state";
import { BoardCommand } from "./board.command";

export class Command {
  board: BoardCommand

  constructor(state: State) {
    this.board = new BoardCommand(state)
  }
}