import { Module } from '@nestjs/common';
import { DtkController } from './dtk.controller';
import { DtkService } from './dtk.service';

@Module({
  controllers: [DtkController],
  providers: [DtkService],
})
export class DtkModule {}
