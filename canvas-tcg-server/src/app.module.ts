import { Module } from '@nestjs/common';
import { DuelModule } from './infra/duel.module.js';

@Module({
  imports: [DuelModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
