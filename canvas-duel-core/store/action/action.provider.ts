import { Store } from "../store";
import { Action } from "./action";

export abstract class ActionProvider<TAction = Action> {
  abstract provide(store: Store): TAction[]
}