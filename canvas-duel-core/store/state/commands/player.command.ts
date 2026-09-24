import { Player } from "../entities/player";
import { State } from "../state";
import { CommandBase } from "./command-base";
import { DeckCommand } from "./deck.command";
import { HandCommand } from "./hand.command";

export class PlayerCommand extends CommandBase {
  hand: HandCommand
  deck: DeckCommand

  constructor(state: State) {
    super(state)
    this.hand = new HandCommand(state)
    this.deck = new DeckCommand(state)
  }

  add(player: Player) {
    this.state.players[player.id] = player
  }
}