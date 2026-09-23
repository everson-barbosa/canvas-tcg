import { DuelEvent } from "../../event";
import { CardDrawnEventType } from "./card-drawn.event-type";

interface CardDrawnEventPayload {
  cardIds: string
  ownerId: string
}

export class CardDrawnEvent extends DuelEvent<CardDrawnEventPayload> {
  type = CardDrawnEventType
}