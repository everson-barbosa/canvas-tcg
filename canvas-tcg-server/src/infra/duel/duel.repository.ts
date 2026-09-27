import { Injectable } from "@nestjs/common";
import { DuelDto } from "./duel.dto";

@Injectable()
export class DuelRepository {
  duels: Map<string, DuelDto> = new Map()

  async create(duel: DuelDto) {
    console.log(duel)

    this.duels.set(duel.id, duel)
  }

  async getById(id: string) {
    return this.duels.get(id) ?? null
  }

  async getByParticipantId(participantId: string): Promise<DuelDto | null> {
    const duel = [...this.duels.values()].find((duel) => 
        duel.participants.has(participantId)
    )   

    return duel ?? null
  }

  async delete(duel: DuelDto) {
    this.duels.delete(duel.id)
  }
}