import { Direction } from "../../../cards/interfaces/direction";
import { Rotation } from "../../../cards/interfaces/rotation";
import { ActorCard, CardArchetype, CardColor, CardCost, CardType } from "../../../cards/card";
import { EffectType } from "../../../cards/effects/effect";

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
    event: "ACTOR_PLAYED",
    execute: {
      explanation: "Compre cartas igual ao custo do ACTOR jogado",
      handler: ({ duel, event, myId }) => {
        const costAmount = duel.query.card.getCostAmount(
          event.payload.cardInstanceId
        )

        duel.effect.hand.draw({
          playerId: myId,
          amount: costAmount
        })
      }
    },
    requirements: {
      explanation: "Se o ACTOR pertence ao adversário",
      handler: ({ event, enemyId }) => {
        return event.payload.ownerId ===  enemyId
      },
    }
  }]
}