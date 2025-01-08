const dtkSdk = require('dtk-nodejs-api-sdk');

import { Injectable } from '@nestjs/common';
import { dtkAppKey, dtkAppSecret } from '../shard/constants';
import { GetTipOffDto } from './dto/get-tip-off.dto';
import { ParseContentDto } from './dto/parse-content.dto';

const sdk = new dtkSdk({
  appKey: dtkAppKey,
  appSecret: dtkAppSecret,
  checkSign: 2,
});

@Injectable()
export class DtkService {
  findTipOffList({ pageId = 1, pageSize = 20 }: GetTipOffDto) {
    return sdk.request(
      'https://openapi.dataoke.com/api/dels/spider/list-tip-off',
      {
        method: 'GET',
        form: { version: 'v5.0.0', pageId, pageSize },
      },
    );
  }

  parseContent({ content }: ParseContentDto) {
    return sdk.request(
      'https://openapi.dataoke.com/api/dels/kit/contentParse',
      {
        method: 'GET',
        form: { version: 'v5.0.0', content },
      },
    );
  }
}
