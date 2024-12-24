import { Test, TestingModule } from '@nestjs/testing';
import { SubscriptionTagService } from './subscription_tag.service';

describe('SubscriptionTagService', () => {
  let service: SubscriptionTagService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SubscriptionTagService],
    }).compile();

    service = module.get<SubscriptionTagService>(SubscriptionTagService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
