import { Controller, Get, Post } from "@nestjs/common";
import { DuelService } from "./duel.service";

@Controller()
export class DuelController {
  constructor(private duelService: DuelService) {}

  @Post("duel:create")
  async create() {
    this.duelService.create({
      activePlayerId: "player-1",
      players: [
        {
          id: "player-1",
          deck: [{ cardId: "brainsucker" }]
        },
        {
          id: "player-2",
          deck: [{ cardId: "brainsucker" }]
        }
      ]
    })
  }

  @Get("duel:in-progress")
  getDuelInProgress() {}
}