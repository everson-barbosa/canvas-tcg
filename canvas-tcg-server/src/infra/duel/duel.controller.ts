import { Body, Controller, Get, Post } from "@nestjs/common";
import { DuelService } from "./duel.service";
import { CreateDuelDto } from "./create-duel.dto";

@Controller()
export class DuelController {
  constructor(private duelService: DuelService) {}

  @Post("duel:create")
  async create(@Body() body: CreateDuelDto) {
    console.log(body)

    this.duelService.create({
      activePlayerId: body.activePlayerId,
      players: body.players
    })
  }

  @Get("duel:in-progress")
  getDuelInProgress() {}
}