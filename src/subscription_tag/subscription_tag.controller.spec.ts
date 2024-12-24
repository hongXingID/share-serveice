import { Test, TestingModule } from '@nestjs/testing';
import { SubscriptionTagController } from './subscription_tag.controller';
import { SubscriptionTagService } from './subscription_tag.service';

describe('SubscriptionTagController', () => {
  let controller: SubscriptionTagController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SubscriptionTagController],
      providers: [SubscriptionTagService],
    }).compile();

    controller = module.get<SubscriptionTagController>(SubscriptionTagController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
