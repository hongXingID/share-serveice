import { Injectable } from '@nestjs/common';
import { CreateSubscriptionTagDto } from './dto/create-subscription_tag.dto';
import { UpdateSubscriptionTagDto } from './dto/update-subscription_tag.dto';
import { InjectModel } from '@nestjs/sequelize';
import { SubscriptionTag } from './entities/subscription_tag.entity';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class SubscriptionTagService {
  constructor(
    @InjectModel(SubscriptionTag)
    private readonly subscriptionTag: typeof SubscriptionTag,
  ) {}
  create(createSubscriptionTagDto: CreateSubscriptionTagDto) {
    const { parent_tag_id, remark, tag_name } = createSubscriptionTagDto;
 
    return this.subscriptionTag.create({
      tag_id: uuidv4(),
      tag_name,
      remark,
      parent_tag_id,
    });
  }

  findAll() {
    return this.subscriptionTag.findAll();
  }

  findOne(id: number) {
    return `This action returns a #${id} subscriptionTag`;
  }

  update(id: number, updateSubscriptionTagDto: UpdateSubscriptionTagDto) {
    return `This action updates a #${id} subscriptionTag`;
  }

  remove(id: number) {
    return `This action removes a #${id} subscriptionTag`;
  }
}
