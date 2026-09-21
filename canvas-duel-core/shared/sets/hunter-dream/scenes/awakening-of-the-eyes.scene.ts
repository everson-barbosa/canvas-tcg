import { CardType, SceneCard } from "../../../cards/card";
import { EffectType } from "../../../cards/effects/effect";

export const AwakeningOfTheEyes: SceneCard = {
  type: CardType.SCENE,
  id: "awakening-of-the-eyes",
  name: "Awakening of the eyes",
  effects: [
    {
      type: EffectType.IGNITION,
      execute: {
        explanation: "Compre 2 cartas",
        handler: ({ duel, myId }) => {
          duel.effect.hand.draw({
            playerId: myId,
            amount: 2
          })
        }
      },
      requirements: {
        explanation: "Se tiver menos de 2 cartas na mão",
        handler: ({ query, myId }) => {
          return query.player.hand.getAmountByPlayer(myId) <= 2
        }
      }
    }
  ]  
}