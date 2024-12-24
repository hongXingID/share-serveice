import { Test, TestingModule } from '@nestjs/testing';
import { WechatyController } from './wechaty.controller';
import { WechatyService } from './wechaty.service';

describe('WechatyController', () => {
  let controller: WechatyController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WechatyController],
      providers: [WechatyService],
    }).compile();

    controller = module.get<WechatyController>(WechatyController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
