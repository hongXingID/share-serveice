import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';
import { SubscriptionTag } from 'src/subscription_tag/entities/subscription_tag.entity';
import { UserSubscriptionTag } from './entities/user_subscription_tag.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User)
    private readonly userModel: typeof User,
  ) {}
  create(createUserDto: CreateUserDto): Promise<unknown> {
    return this.userModel
      .create({
        login_id: '11',
        user_name: '11',
        password: 'password',
        login_num: 1,
        login_last_ip: '192.168.1.101',
      })
      .then((User) => {
        return User.$set('subscription_type', [1,2]);
      });
  }

  async findAll(): Promise<User[]> {
    return this.userModel.findAll({ include: [SubscriptionTag] });
  }

  findOne(id: string): Promise<User> {
    return this.userModel.findOne({
      where: {
        id,
      },
    });
  }

  async remove(id: string): Promise<void> {
    const user = await this.findOne(id);
    await user.destroy();
  }
}
