import { Phase } from "./entities/phase";
import { State } from "./state";

export function factoryState(): State {
  return {
    attacks: {},
    board: {
      cards: {},
      blockedPositions: []
    },
    cards: {},
    phase: Phase.IDLE,
    players: {},
    turn: {
      count: 0,
      activePlayerId: null
    }
  }
}