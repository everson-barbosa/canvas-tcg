import { QueryBase } from "./query-base";

export class CardQuery extends QueryBase {
  listByIds(cardInstanceIds: string[]) {
    return Object.values(this.state.cards).filter(card => 
      cardInstanceIds.includes(card.cardInstanceId)
    )
  }
}