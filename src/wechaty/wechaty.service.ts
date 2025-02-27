import { Injectable } from '@nestjs/common';
import { toObject } from 'src/shard/utils/wechaty';
import { Message, ScanStatus, WechatyBuilder } from 'wechaty';
import {
  CreateWechatyDto,
  ExecWechatyCodeDto,
  RemoveWechatyInstanceDto,
} from './dto/create-wechaty.dto';
import { UpdateWechatyDto } from './dto/update-wechaty.dto';

const wechatyInstances: { [key: string]: ReturnType<WechatyBuilder['build']> } =
  {};

@Injectable()
export class WechatyService {
  create({ name }: CreateWechatyDto) {
    const bot = WechatyBuilder.build({
      name,
    });
    const botId = bot.id;
    wechatyInstances[botId] = bot;

    return new Promise((resolve, reject) => {
      bot.on('scan', (qrcode, status) => {
        const loginUrl =
          'https://wechaty.js.org/qrcode/' + encodeURIComponent(qrcode);

        const scanStatus = ScanStatus[status];
        resolve({
          loginUrl,
          scanStatus,
          botId,
        });
      });
      bot.start();
      console.log(botId, 'botId');
    });
  }

  async exec({ botId, codes }: ExecWechatyCodeDto) {
    const bot = wechatyInstances[botId];
    let result;
    try {
      for (let i = 0; i < codes.length; i++) {
        result = await new Function(codes[0])(i === 0 ? bot : result);
      }

      bot.Contact.findAll();
      return toObject(result);
    } catch (error) {
      return error;
    }
  }

  /**
   * 专属监听
   */
  async listen() {
    const bot = WechatyBuilder.build({
      name: 'ax',
    });
    const botId = bot.id;
    wechatyInstances[botId] = bot;

    bot.on('scan', (qrcode) => {
      const loginUrl =
        'https://wechaty.js.org/qrcode/' + encodeURIComponent(qrcode);
      console.log(loginUrl);
    });
    bot.start();
    bot.on('message', async (message: Message) => {
      const room = message.room();
      const text = message.text();
      const targetRooms = ['测试群'];
 

      if (room && text ) {
        // const sender = message.talker();
        console.log(
          text,
          room?.payload?.topic
        );

        try {
          const targetUser = await bot.Contact.find({ name: 'Eric' });
          await targetUser.say(text);
        } catch (error) {
          console.error(`Error forwarding message: ${error}`);
        }
      }
    });
  }

  findAll() {
    return Object.keys(wechatyInstances);
  }

  findOne(botId: string) {
    return wechatyInstances[botId];
  }

  update(id: number, updateWechatyDto: UpdateWechatyDto) {
    return `This action updates a #${id} wechaty`;
  }

  async remove({ botId }: RemoveWechatyInstanceDto) {
    const bot = wechatyInstances[botId];
    await bot.logout();
    delete wechatyInstances[botId];
  }
}
