import { DuelConfig } from "@core/store/duel-starter";
import { Store } from "@core/store/store";
import { Injectable } from "@nestjs/common";

@Injectable()
export class DuelService {
  create(config: DuelConfig) {
    const store = new Store()
    
    store.start(config)
  }
}