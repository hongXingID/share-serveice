import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { AiChatController } from './ai-chat.controller';
import { AiChatService } from './ai-chat.service';
import { AiChat } from './entities/ai-chat.entity';

@Module({
  imports: [SequelizeModule.forFeature([AiChat])],
  controllers: [AiChatController],
  providers: [AiChatService],
})
export class AiChatModule {}
