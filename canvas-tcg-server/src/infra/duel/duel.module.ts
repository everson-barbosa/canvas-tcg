import { Module } from "@nestjs/common";
import { DuelController } from "./duel.controller";
import { DuelService } from "./duel.service";
import { DuelRepository } from "./duel.repository";

@Module({
  providers: [DuelRepository, DuelService],
  controllers: [DuelController]
})
export class DuelModule {}