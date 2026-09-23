import { Store } from "./store/store";

const store = new Store()

store.starter({
  players: [
    { id: 'player-1', deck: [
      { cardId: "brainsucker" },
      { cardId: "brainsucker" },
      { cardId: "brainsucker" },
    ],  },
    { id: 'player-2', deck: [] },
  ],
  activePlayerId: "player-1"
})


// console.log({ actions: store.getActions() })
// console.log(Object.values(store.state.getState()))