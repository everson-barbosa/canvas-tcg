
export interface Player {
  id: string
  deck: string[]
  hand: string[]
  trash: string[]
}

export type Players = Record<string, Player>