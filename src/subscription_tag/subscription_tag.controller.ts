import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SubscriptionTagService } from './subscription_tag.service';
import { CreateSubscriptionTagDto } from './dto/create-subscription_tag.dto';
import { UpdateSubscriptionTagDto } from './dto/update-subscription_tag.dto';

@Controller('subscription-tag')
export class SubscriptionTagController {
  constructor(private readonly subscriptionTagService: SubscriptionTagService) {}

  @Post()
  create(@Body() createSubscriptionTagDto: CreateSubscriptionTagDto) {
    return this.subscriptionTagService.create(createSubscriptionTagDto);
  }

  @Get()
  findAll() {
    return this.subscriptionTagService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.subscriptionTagService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSubscriptionTagDto: UpdateSubscriptionTagDto) {
    return this.subscriptionTagService.update(+id, updateSubscriptionTagDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.subscriptionTagService.remove(+id);
  }
}
