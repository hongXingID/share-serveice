import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';

import { SendAiChatDto } from './dto/create-ai-chat.dto';
import { UpdateAiChatDto } from './dto/update-ai-chat.dto';
import { AiChat } from './entities/ai-chat.entity';

const config = {
  baseURL: 'https://geekai.co/api/v1/chat/completions',
  apiKey: 'sk-ddFOc7cNiNbCcdTa5OVIdd2RvwuyDti4lLLhngKiViq9NTS8',
};

@Injectable()
export class AiChatService {
  constructor(
    @InjectModel(AiChat)
    private readonly aiChatModel: typeof AiChat,
  ) {}
  async create(createAiChatDto: SendAiChatDto) {
    const message = await this.aiChatModel.findAll();

    const messages = createAiChatDto.messages.concat(
      message.map((item) => {
        return {
          role: 'user',
          content: item.message,
        };
      }),
    );

    const res = await fetch(config.baseURL, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${config.apiKey}`,
      },
      body: JSON.stringify({
        messages,
        // model: "gpt-4o-mini",
        model: 'glm-4-flash',
        stream: false,
      }),
    }).then((res) => res.json());
    return res;
  }

  findAll() {
    return this.aiChatModel.findAndCountAll();
  }

  findOne(id: number) {
    return `This action returns a #${id} aiChat`;
  }

  update(id: number, updateAiChatDto: UpdateAiChatDto) {
    return `This action updates a #${id} aiChat`;
  }

  remove(id: number) {
    return `This action removes a #${id} aiChat`;
  }
}
