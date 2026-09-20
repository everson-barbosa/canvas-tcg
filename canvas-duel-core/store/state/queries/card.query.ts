import { CardType } from "../../../shared/cards/card";
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

  getCostAmount(cardInstanceId: string): number {
    const card = this.state.cards[cardInstanceId]

    if (!card) return 0

    if (card.definition.type !== CardType.ACTOR) return 0

    return card.definition.cost.length
  }
}