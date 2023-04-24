import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {AuthModule} from './authentication/auth.module';
import {TypeOrmModule} from '@nestjs/typeorm'
import {tutorshubDataSource} from './data-source'

@Module({
  imports: [AuthModule, TypeOrmModule.forRoot(tutorshubDataSource)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
