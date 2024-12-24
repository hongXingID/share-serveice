import { Module } from '@nestjs/common';
import { SubscriptionTagService } from './subscription_tag.service';
import { SubscriptionTagController } from './subscription_tag.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { SubscriptionTag } from './entities/subscription_tag.entity';

@Module({
  imports: [SequelizeModule.forFeature([SubscriptionTag])],
  controllers: [SubscriptionTagController],
  providers: [SubscriptionTagService],
})
export class SubscriptionTagModule {}
