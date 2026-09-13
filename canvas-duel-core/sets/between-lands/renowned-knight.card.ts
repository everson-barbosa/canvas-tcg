import { ActorCard, CardType } from "../../shared/cards/card";
import { EffectProperty, EffectType } from "../../shared/cards/effect";
import { Direction } from "../../shared/direction";
import { Orientation } from "../../shared/orientation";
import { Rotation } from "../../shared/rotation";

export const RenownedKnight: ActorCard = {
  type: CardType.ACTOR,
  id: 'renowned-knight',
  name: 'Renowned Knight',
  attack: 5,
  vigor: 4,
  directions: [Direction.FOWARD, Direction.FOWARD_RIGHT, Direction.FOWARD_LEFT],
  rotations: [Rotation.RIGHT, Rotation.LEFT],
  effects: [
    {
      type: EffectType.IGNITION,
      properties: [EffectProperty.IN_BOARD, EffectProperty.ONCE_PER_TURN],
      execute: {
        explanation: "Selecione 1 carta no campo e mude a ORIENTATION dela para NORTH",
        handler: ({ duel, myId }) => {
          const cards = duel.query.board.list()

          duel.prompt.selectCard({
            cardInstanceIds: cards.map(card => card.cardInstanceId),
            ownerId: myId,
            callback: (cardInstanceId => {
              if (cardInstanceId) {
                duel.effect.board.changeOrientation({
                  cardInstanceId,
                  orientation: Orientation.NORTH
                })
              }
            })
          })
        }
      },
      requirements: {
        explanation: "",
        handler: () => {}
      }
    },
  ],
}