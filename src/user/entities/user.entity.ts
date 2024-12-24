import {
  Column,
  Model,
  Table,
  DataType,
  IsDate,
  IsIP,
  BelongsToMany,
} from 'sequelize-typescript';
import { SubscriptionTag } from 'src/subscription_tag/entities/subscription_tag.entity';
import { UserSubscriptionTag } from './user_subscription_tag.entity';

@Table({ tableName: 'user' })
export class User extends Model {
  @Column({
    allowNull: false,
    comment: '登录id',
  })
  login_id: string;

  @Column({
    allowNull: false,
    comment: '用户名',
  })
  user_name: string;

  @Column({
    type: DataType.STRING(50),
    allowNull: false,
    comment: '密码(加密)',
  })
  password: string;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    defaultValue: 0,
    comment: '登录次数',
  })
  login_num: number;

  @IsIP
  @Column({
    type: DataType.STRING(20),
    comment: '最后一次登录ip',
  })
  login_last_ip?: string;

  @IsDate
  @Column({
    type: DataType.DATE,
    comment: '最后一次登录时间',
  })
  login_last_time?: Date;

  @BelongsToMany(() => SubscriptionTag, () => UserSubscriptionTag)
  subscription_type: SubscriptionTag[];
}
