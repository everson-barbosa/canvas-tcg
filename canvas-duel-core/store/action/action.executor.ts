import { Store } from "../store";
import { Action } from "./action";
import { ActionChoice } from "./action.choice";

export abstract class ActionExecutor<TAction = Action, TActionChoice = ActionChoice> {
  abstract type: string

  abstract execute(action: TAction, choice: TActionChoice, store: Store): void
}