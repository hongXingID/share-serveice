import {
  AllowNull,
  Column,
  CreatedAt,
  DeletedAt,
  ForeignKey,
  Model,
  Table,
  UpdatedAt,
} from 'sequelize-typescript';
import { User } from './user.entity';
import { SubscriptionTag } from 'src/subscription_tag/entities/subscription_tag.entity';

@Table({ tableName: 'user_subscription_tag' })
export class UserSubscriptionTag extends Model {
  @ForeignKey(() => User)
  @Column
  user_id: number;

  @ForeignKey(() => SubscriptionTag)
  @Column
  subscription_tag_id: number;

  @CreatedAt
  creationDate: Date;

  @UpdatedAt
  updatedOn: Date;

  @DeletedAt
  deletionDate: Date;
}
