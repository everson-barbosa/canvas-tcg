import { QueryBase } from "./query-base";

export class CardQuery extends QueryBase {
  getByInstanceId(cardInstanceId: string) {
    return this.state.cards[cardInstanceId] ?? null
  }

  listByIds(cardInstanceIds: string[]) {
    return Object.values(this.state.cards).filter(card => 
      cardInstanceIds.includes(card.cardInstanceId)
    )
  }

  listByOwnerId(ownerId: string) {
    return Object.values(this.state.cards).filter(card => 
      card.ownerId === ownerId
    )
  }
}