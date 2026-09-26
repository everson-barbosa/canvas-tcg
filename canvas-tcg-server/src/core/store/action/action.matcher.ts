import { Action } from "./action";
import { ActionChoice } from "./action.choice";

export abstract class ActionMatcher<TAction = Action, TActionChoice = ActionChoice> {
  abstract type: string

  abstract matches(action: TAction, choice: TActionChoice): boolean
}