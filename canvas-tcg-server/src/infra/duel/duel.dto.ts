import { Store } from "../../core/store/store.js";

export class DuelDto {
  id: string
  store: Store
  participants: Set<string>
}