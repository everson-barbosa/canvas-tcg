import { CardInstance } from "../entities/cards";
import { CommandBase } from "./command-base";

export class CardCommand extends CommandBase {
  save(card: CardInstance) {
    this.state.cards[card.cardInstanceId] = card
  }
}