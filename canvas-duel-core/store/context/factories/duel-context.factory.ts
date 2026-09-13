import { Store } from "../../store";
import { DuelContext } from "../duel.context";

export function factoryDuelContext(store: Store) {
  return new DuelContext(store)
}