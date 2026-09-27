import { Injectable } from "@nestjs/common";
import { DuelDto } from "./duel.dto";

@Injectable()
export class DuelRepository {
  duels: Map<string, DuelDto> = new Map()

  create(duel: DuelDto) {
    this.duels.set(duel.id, duel)
  }

  getById(id: string) {
    return this.duels.get(id) ?? null
  }

  delete(duel: DuelDto) {
    this.duels.delete(duel.id)
  }
}