import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DtkModule } from './dtk/dtk.module';
import { SubscriptionTagModule } from './subscription_tag/subscription_tag.module';
import { UsersModule } from './user/users.module';
import { WechatyModule } from './wechaty/wechaty.module';
import { FileManagerModule } from './file-manager/file-manager.module';
import { AiChatModule } from './ai-chat/ai-chat.module';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: '159.75.160.173',
      port: 3306,
      username: 'share_db_dev',
      password: 's3emCALXn7ZSccfS',
      database: 'share_db_dev',
      autoLoadModels: true,
      synchronize: true,
    }),
    UsersModule,
    SubscriptionTagModule,
    WechatyModule,
    DtkModule,
    FileManagerModule,
    AiChatModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
