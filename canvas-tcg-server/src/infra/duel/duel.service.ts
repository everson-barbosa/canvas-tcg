import { DuelConfig } from "@core/store/store.starter";
import { Store } from "@core/store/store";
import { Injectable } from "@nestjs/common";
import { DuelRepository } from "./duel.repository";
import { randomUUID } from "crypto";

@Injectable()
export class DuelService {
  constructor(private duelRepository: DuelRepository) {}

  async create(config: DuelConfig) {
    const store = new Store()

    await this.duelRepository.create({
      id: randomUUID(),
      participants: new Set(config.players.map(player => player.id)),
      store,
    }) 
  }

  async getByParticipantId(participantId: string) {
    const duel = await this.duelRepository.getByParticipantId(participantId)

    return duel
  }
}