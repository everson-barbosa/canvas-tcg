import { Direction } from "../direction"
import { Rotation } from "../rotation"
import { Effect } from "./effect"

export enum CardType {
  ACTOR = "ACTOR",
  SCENE = "SCENE",
  DRAMA = "DRAMA"
}

export enum CardColor {
  RED,
  GREEN,
  BLUE,
  PURPLE,
  YELLOW,
  NEUTRAL
}

export enum CardArchetype {
  HUMANI,
  AVIAN,
  MARINE,
  BEAST,
  AUTOMATA,
  NATURE
}

export enum CardCost {
  RED,
  GREEN,
  BLUE,
  PURPLE,
  YELLOW,
  ANY
}

export interface BaseCard {
  id: string
  name: string
  type: CardType
  archetypes: CardArchetype[]
  effects: Effect[]
}

export interface ActorCard extends BaseCard {
  type: CardType.ACTOR
  color: CardColor
  cost: CardCost[]
  vigor: number
  attack: number
  rotations: Rotation[]
  directions: Direction[]
}

export interface SceneCard extends BaseCard {
  type: CardType.SCENE
}

export interface DramaCard extends BaseCard {
  type: CardType.DRAMA
}

export type Card = ActorCard | SceneCard | DramaCard