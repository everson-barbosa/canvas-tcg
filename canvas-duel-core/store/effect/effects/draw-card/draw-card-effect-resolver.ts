import { Store } from "../../../store";
import { EffectResolver } from "../../effect.resolver";
import { DrawCardEffect } from "./draw-card.effect";
import { DrawCardEffectType } from "./draw-card.effect-type";


export class DrawCardEffectResolver extends EffectResolver<DrawCardEffect> {
  type = DrawCardEffectType

  resolve(effect: DrawCardEffect, store: Store): void {
    

  }
}