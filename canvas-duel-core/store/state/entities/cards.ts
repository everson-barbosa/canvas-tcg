import { Card } from "../../../shared/cards/card"

export interface CardInstance {
  cardInstanceId: string
  ownerId: string
  definition: Card
}

export type Cards = Record<string, CardInstance>