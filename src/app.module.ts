import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';
import {AuthModule} from './authentication/auth.module';
import {TypeOrmModule, TypeOrmModuleOptions} from '@nestjs/typeorm'
import {tutorshubDataSource} from './data-source'
import { TutorModule } from './Tutors/tutor.module';
import { ReviewModule } from './reviews/reviews.module';
import { Tutor } from './entity/Tutor';
import { Reviews } from './entity/Reviews';
// import {LoggerMiddleware} from '../src/middlewares/logger.middleware'
// import { AuthguardModule } from './authguard/authguard.module';


@Module({
  imports: [AuthModule, TutorModule, ReviewModule ,TypeOrmModule.forRoot(tutorshubDataSource)],
  controllers: [],
  providers: [],
})
export class AppModule {}

// export class AppModule implements NestModule {
//   configure(consumer: MiddlewareConsumer){
//     consumer
//     .apply(LoggerMiddleware)
//     .forRoutes('')
//   }
// }



