import { Store } from "../store";
import { DuelEvent } from "./event";

export abstract class EventHandler<T = DuelEvent> {
  abstract type: string

  abstract handle(event: T, store: Store): void
}