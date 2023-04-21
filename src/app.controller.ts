import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('posts')
export class AppController {
  constructor(private appService: AppService) {}

  @Get()
  getPosts() {
    return this.appService.getPosts();
  }
}
