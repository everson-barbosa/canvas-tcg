import { ActorCard, CardArchetype, CardColor, CardCost, CardType } from "../../../shared/cards/card"
import { EffectType } from "../../../shared/cards/effects/effect-base"
import { Direction } from "../../../shared/cards/interfaces/direction"
import { Rotation } from "../../../shared/cards/interfaces/rotation"

export const RenownedKnight: ActorCard = {
  type: CardType.ACTOR,
  id: 'renowned-knight',
  name: 'Renowned Knight',
  color: CardColor.NEUTRAL,
  cost: [CardCost.ANY, CardCost.ANY],
  archetypes: [CardArchetype.HUMANI],
  attack: 5,
  vigor: 4,
  directions: [Direction.FOWARD, Direction.FOWARD_RIGHT, Direction.FOWARD_LEFT],
  rotations: [Rotation.RIGHT, Rotation.LEFT],
  effects: [
    {
      type: EffectType.IGNITION,
      execute: {
        explanation: "Selecione 1 carta no campo, selecione uma ORIENTATION e mude a ORIENTATION",
        handler: ({ duel, myId }) => {          
          const cards = duel.query.board.list()

          duel.prompt.selectCard({
            cardInstanceIds: cards.map(card => card.cardInstanceId),
            ownerId: myId,
            callback: (({ cardInstanceId }) => {

              duel.prompt.selectOrientation({
                ownerId: myId,
                callback: ({ orientation }) => {

                    duel.effect.board.changeOrientation({
                    cardInstanceId,
                    orientation
                  })
                }

              })

            })
          })
        }
      },
    },
  ],
}