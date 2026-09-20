import { Store } from "./store/store";

const store = new Store()

console.log({ actions: store.getActions() })