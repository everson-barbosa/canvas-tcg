import { State } from "../state";
import { BoardQuery } from "./board.query";
import { CardQuery } from "./card.query";
import { PlayerQuery } from "./player.query";
import { TurnQuery } from "./turn.query";

export class Query {
  board: BoardQuery
  player: PlayerQuery
  turn: TurnQuery
  card: CardQuery

  constructor(state: State) {
    this.board = new BoardQuery(state)
    this.player = new PlayerQuery(state)
    this.turn = new TurnQuery(state)
    this.card = new CardQuery(state)
  }
}