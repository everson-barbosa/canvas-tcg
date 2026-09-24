import { Sets } from "../../sets/sets";
import { Card } from "./card";

export class CardManager {
  registry: Map<string, Card>

  constructor() {
    this.registry = this.getRegistry()
  }

  getRegistry() {
    return new Map(
      Sets.map(card => [card.id, card])
    )
  }

  getCardById(cardId: string) {
    return this.registry.get(cardId) ?? null
  }
}