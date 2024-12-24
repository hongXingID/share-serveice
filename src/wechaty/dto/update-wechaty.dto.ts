import { PartialType } from '@nestjs/mapped-types';
import { CreateWechatyDto } from './create-wechaty.dto';

export class UpdateWechatyDto extends PartialType(CreateWechatyDto) {}
