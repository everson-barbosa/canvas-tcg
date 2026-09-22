import { Direction } from "../../../cards/interfaces/direction";
import { Rotation } from "../../../cards/interfaces/rotation";
import { ActorCard, CardArchetype, CardColor, CardCost, CardType } from "../../../cards/card";
import { EffectType } from "../../../cards/effects/effect-base";

export const Brainsucker: ActorCard = {
  type: CardType.ACTOR,
  id: "brainsucker",
  name: "Brainsucker",
  color: CardColor.PURPLE,
  cost: [CardCost.PURPLE, CardCost.PURPLE, CardCost.ANY],
  archetypes: [CardArchetype.HUMANI],
  attack: 2,
  vigor: 5,
  directions: [Direction.FOWARD],
  rotations: [Rotation.RIGHT, Rotation.LEFT],
  effects: [{
    type: EffectType.TRIGGER,
    event: "CHANGED_POSITION",
    execute: {
      explanation: "Compre 1 carta",
      handler: ({ duel, myId }) => {
        duel.effect.hand.draw({
          playerId: myId,
          amount: 1
        })
      }
    },
  }]
}