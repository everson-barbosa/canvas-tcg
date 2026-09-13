import { Phase } from "./entities/phase";
import { State } from "./state";

export function factoryState(): State {
  return {
    players: {},
    board: {
      cards: {},
      blockedPositions: []
    },
    cards: {},
    phase: Phase.IDLE,
    turn: {
      count: 0,
      activePlayer: null
    }
  }
}