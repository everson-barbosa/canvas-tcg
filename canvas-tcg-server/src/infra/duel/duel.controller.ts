import { Body, Controller, Get, NotFoundException, Post } from "@nestjs/common";
import { DuelService } from "./duel.service";
import { CreateDuelDto } from "./create-duel.dto";

@Controller()
export class DuelController {
  constructor(private duelService: DuelService) {}

  @Post("duels:create")
  async create(@Body() body: CreateDuelDto) {
    console.log(body)

    this.duelService.create({
      activePlayerId: body.activePlayerId,
      players: body.players
    })
  }

  @Get("duels:active")
  async getDuel() {
    const playerId = "player-1" // Mock

    const duel = await this.duelService.getByParticipantId(playerId)

    if (!duel) {
      throw new NotFoundException("Duel not found")
    }

    return duel
  }


}