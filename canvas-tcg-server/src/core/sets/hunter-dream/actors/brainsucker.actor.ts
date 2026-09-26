import { ActorCard, CardArchetype, CardColor, CardCost, CardType } from "@core/shared/cards/card.js"
import { EffectProperty, EffectType } from "@core/shared/cards/effects/effect-base.js"
import { Direction } from "@core/shared/cards/interfaces/direction.js"
import { Rotation } from "@core/shared/cards/interfaces/rotation"


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
    properties: [EffectProperty.ONCE_PER_TURN],
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