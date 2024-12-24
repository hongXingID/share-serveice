import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { WechatyService } from './wechaty.service';
import { CreateWechatyDto, ExecWechatyCodeDto } from './dto/create-wechaty.dto';
import { UpdateWechatyDto } from './dto/update-wechaty.dto';

@Controller('wechaty')
export class WechatyController {
  constructor(private readonly wechatyService: WechatyService) {}

  @Post('create')
  async create(@Body() createWechatyDto: CreateWechatyDto) {
    console.log(createWechatyDto, 'create');
    const result = await this.wechatyService.create(createWechatyDto);
   
    return result;
  }

  @Post('exec')
  async exec(@Body() execWechatyCodeDto: ExecWechatyCodeDto) {
    return await this.wechatyService.exec(execWechatyCodeDto);
  }

  @Get()
  findAll() {
    return this.wechatyService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') botId: string) {
    return this.wechatyService.findOne(botId);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateWechatyDto: UpdateWechatyDto) {
    return this.wechatyService.update(+id, updateWechatyDto);
  }

  @Delete(':id')
  remove(@Param('id') botId: string) {
    return this.wechatyService.remove({ botId });
  }
}
