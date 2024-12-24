import {
  AllowNull,
  BelongsTo,
  BelongsToMany,
  Column,
  CreatedAt,
  DataType,
  DeletedAt,
  ForeignKey,
  IsUUID,
  Length,
  Model,
  Table,
  UpdatedAt,
} from 'sequelize-typescript';
import { User } from 'src/user/entities/user.entity';
import { UserSubscriptionTag } from 'src/user/entities/user_subscription_tag.entity';

@Table({ tableName: 'subscription_tag' })
export class SubscriptionTag extends Model {
  @Length({ max: 36 })
  @Column({
    type: DataType.STRING,
    comment: '订阅的标签id',
  })
  tag_id: string;

  @Length({ max: 36 })
  @Column({
    type: DataType.STRING,
    allowNull: false,
    comment: '标签名',
  })
  tag_name: string;

  @Column({
    allowNull: true,
    type: DataType.STRING,
    comment: '标签备注',
  })
  remark: string;

  @Column({
    allowNull: true,
    type: DataType.STRING,
    comment: '父级标签id',
  })
  parent_tag_id: number;

  @CreatedAt
  creationDate: Date;

  @UpdatedAt
  updatedOn: Date;

  @DeletedAt
  deletionDate: Date;

  @BelongsToMany(() => User, () => UserSubscriptionTag)
  users: User[];
}
