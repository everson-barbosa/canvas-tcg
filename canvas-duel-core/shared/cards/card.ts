import { Direction } from "../direction"
import { Rotation } from "../rotation"
import { Effect } from "./effect"

export enum CardType {
  ACTOR = "ACTOR",
  SCENE = "SCENE",
  DRAMA = "DRAMA"
}

export interface BaseCard {
  id: string
  name: string
}

export interface ActorCard extends BaseCard {
  type: CardType.ACTOR
  vigor: number
  attack: number
  rotations: Rotation[]
  directions: Direction[]
  effects: Effect[]
}

export interface SceneCard extends BaseCard {
  type: CardType.SCENE
}

export interface DramaCard extends BaseCard {
  type: CardType.DRAMA
}

export type Card = ActorCard | SceneCard | DramaCard