import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {AuthModule} from './authentication/auth.module';
import {TypeOrmModule} from '@nestjs/typeorm'
import {tutorshubDataSource} from './data-source'
import { TutorModule } from './Tutors/tutor.module';
import { ReviewModule } from './reviews/reviews.module';
// import {LoggerMiddleware} from '../src/middlewares/logger.middleware'
// import { AuthguardModule } from './authguard/authguard.module';

@Module({
  imports: [AuthModule, TutorModule, ReviewModule ,TypeOrmModule.forRoot(tutorshubDataSource)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

// export class AppModule implements NestModule {
//   configure(consumer: MiddlewareConsumer){
//     consumer
//     .apply(LoggerMiddleware)
//     .forRoutes('')
//   }
// }



