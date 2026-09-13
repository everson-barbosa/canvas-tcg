import { Store } from "../../../store";
import { EffectResolver } from "../../effect.resolver";
import { PlayActorEffect } from "./play-actor.effect";
import { PlayActorEffectType } from "./play-actor.effect-type";

export class PlayActorEffectResolver extends EffectResolver<PlayActorEffect> {
  type = PlayActorEffectType

  resolve(effect: PlayActorEffect, store: Store) {
    const { cardInstanceId, ownerId, orientation, position } = effect.payload

    const isPositionOccupied = store.stateManager.query.board.isPositionOccupied(position)

    if (isPositionOccupied) return

    store.stateManager.command.board.playCard({
      cardInstanceId,
      ownerId,
      orientation,
      position
    })
  }
}