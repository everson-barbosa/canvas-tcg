import { Player } from "../entities/player";
import { State } from "../state";
import { CommandBase } from "./command-base";

export class PlayerCommand extends CommandBase {
  constructor(state: State) {
    super(state)
  }

  add(player: Player) {
    this.state.players[player.id] = player
  }
}