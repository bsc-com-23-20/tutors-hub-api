import { Test, TestingModule } from '@nestjs/testing';
import { AuthController } from './authentication/auth.controller';
import { AuthService } from './authentication/auth.service';
import { TutorDetails } from './authentication/dto/register-dto';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';

describe('AuthController', () => {
  let appController: AuthController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AuthController],
      providers: [AuthService],
    }).compile();

    appController = app.get<AuthController>(AuthController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.signup(TutorDetails).toBe('Hello World!'));
    });
  });
});
