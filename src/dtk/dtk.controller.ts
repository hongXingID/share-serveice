import { Controller, Get, Param } from '@nestjs/common';
import { DtkService } from './dtk.service';
import { GetTipOffDto } from './dto/get-tip-off.dto';
import { ParseContentDto } from './dto/parse-content.dto';

@Controller('dtk')
export class DtkController {
  constructor(private readonly dtkService: DtkService) {}

  @Get('/findTipOffList')
  async findTipOffList(@Param() getTipOffDto: GetTipOffDto = {}) {
    console.log(getTipOffDto, '请求来了');
    const result = await this.dtkService.findTipOffList(getTipOffDto);
    return result;
  }

  @Get('/contentParse')
  async parseContent(@Param() ParseContentDto){
    const result = await this.dtkService.parseContent(ParseContentDto);
    return result;
  }
}
