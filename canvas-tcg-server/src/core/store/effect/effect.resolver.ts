import { Store } from "../store";
import { Effect } from "./effect";

export abstract class EffectResolver<T extends Effect = Effect> {
  abstract type: string

  abstract resolve(
    effect: T,
    store: Store
  ): void;
}