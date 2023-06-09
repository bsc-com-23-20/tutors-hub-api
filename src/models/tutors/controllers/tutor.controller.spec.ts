import { Test, TestingModule } from '@nestjs/testing';
import { TutorController } from './tutor.controller';
// import { UserController } from './user/user.controller';

describe('UserController', () => {
  let controller: TutorController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TutorController],
    }).compile();

    controller = module.get<TutorController>(TutorController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
