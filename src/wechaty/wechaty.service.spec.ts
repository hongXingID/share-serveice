import { Test, TestingModule } from '@nestjs/testing';
import { WechatyService } from './wechaty.service';

describe('WechatyService', () => {
  let service: WechatyService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WechatyService],
    }).compile();

    service = module.get<WechatyService>(WechatyService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
