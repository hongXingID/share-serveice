import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { UsersService } from './users.service';
import { User } from './entities/user.entity';
import { UsersController } from './users.controller';
import { UserSubscriptionTag } from './entities/user_subscription_tag.entity';

@Module({
  imports: [SequelizeModule.forFeature([User, UserSubscriptionTag])],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
