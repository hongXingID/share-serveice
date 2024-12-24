import { PartialType } from '@nestjs/mapped-types';
import { CreateSubscriptionTagDto } from './create-subscription_tag.dto';

export class UpdateSubscriptionTagDto extends PartialType(CreateSubscriptionTagDto) {}
