import { Column, Model, Table } from 'sequelize-typescript';
@Table({ tableName: 'ai-chat' })
export class AiChat extends Model {
  @Column({
    allowNull: false,
    comment: '用户id',
  })
  user_id: string;

  @Column({
    allowNull: false,
    comment: '消息',
  })
  message: string;
}
