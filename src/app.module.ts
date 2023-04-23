import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {} from '../src/authentication/auth.module'
import {TypeOrmModule} from '@nestjs/typeorm'
import {tutorshubDataSource} from './data-source'

@Module({
  imports: [TypeOrmModule.forRoot(tutorshubDataSource)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
