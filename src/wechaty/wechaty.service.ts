import { Injectable } from '@nestjs/common';
import {
  CreateWechatyDto,
  ExecWechatyCodeDto,
  RemoveWechatyInstanceDto,
} from './dto/create-wechaty.dto';
import { UpdateWechatyDto } from './dto/update-wechaty.dto';
import { ScanStatus, WechatyBuilder } from 'wechaty';
import { toObject } from 'src/shard/utils/wechaty';


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
      console.log(botId,'botId')
    });
  }

  async exec({ botId, code }: ExecWechatyCodeDto) {
    const bot = wechatyInstances[botId];
    try {
      const result = await new Function(code)(bot);
      return toObject(result);
    } catch (error) {
      return error
    }
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
