import { Test, TestingModule } from '@nestjs/testing';
import { DtkService } from './dtk.service';

describe('DtkService', () => {
  let service: DtkService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DtkService],
    }).compile();

    service = module.get<DtkService>(DtkService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
