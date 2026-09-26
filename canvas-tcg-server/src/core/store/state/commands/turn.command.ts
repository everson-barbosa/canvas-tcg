import { CommandBase } from "./command-base";

export class TurnCommand extends CommandBase {
  setPlayer(activePlayer: string) {
    this.state.turn.activePlayerId = activePlayer
  }
}