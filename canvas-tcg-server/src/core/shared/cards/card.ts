import { Direction } from "./interfaces/direction"
import { Rotation } from "./interfaces/rotation"
import { Effect } from "./effects/effect"

export enum CardType {
  MAESTRO = "MAESTRO",
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
  effects: Effect[]
}

export interface ActorCard extends BaseCard {
  type: CardType.ACTOR
  archetypes: CardArchetype[]
  color: CardColor
  cost: CardCost[]
  vigor: number
  attack: number
  rotations: Rotation[]
  directions: Direction[]
}

export interface MaestroCard extends BaseCard {
  type: CardType.MAESTRO
  archetypes: CardArchetype[]
  color: CardColor
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

export type Card = MaestroCard | ActorCard | SceneCard | DramaCard