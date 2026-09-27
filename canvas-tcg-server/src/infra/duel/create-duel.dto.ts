export class CreateDuelDto {
  activePlayerId: string
  players: Array<{
    id: string
    deck: Array<{
      cardId: string
    }>
  }>
}