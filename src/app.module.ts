import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import Tutor from './models/tutors/entities/tutor';
import { TutorModule } from './models/tutors/module/tutor.module';
import Reviewer from './models/reviewers/entities/reviewer';
import { ReviewerModule } from './models/reviewers/module/reviewer.module';
import { PostModule } from './models/posts/module/post.module';
import Post from './models/posts/entities/post';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'mernana@03',
      database: 'tutorshub',
      entities: [Tutor, Reviewer, Post],
      synchronize: true,
    }),
    TutorModule,
    ReviewerModule,
    PostModule,
    SwaggerModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
