import { Module } from '@nestjs/common';
import { DuelModule } from './infra/duel/duel.module';

@Module({
  imports: [DuelModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
