import { Module } from "@nestjs/common";
import { DuelController } from "./duel.controller";
import { DuelService } from "./duel.service";
import { DuelRepository } from "./duel.repository";
import { DuelGateway } from "./duel.gateway";

@Module({
  providers: [
    DuelRepository, 
    DuelService,
    DuelGateway
  ],
  controllers: [DuelController]
})
export class DuelModule {}