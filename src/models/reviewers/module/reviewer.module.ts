import { Module, Global } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ReviewerController } from '../controllers/reviewer.controller';
import { ReviewerService } from '../services/reviewer.service';
import Reviewer from '../entities/reviewer';
import { TutorController } from '../../tutors/controllers/tutor.controller';
import { PostService } from '../../posts/services/post.service';
import { TutorService } from '../../tutors/services/tutor.service';
import Tutor from '../../tutors/entities/tutor';
import Post from '../../posts/entities/post';
import { PostModule } from '../../posts/module/post.module';

// @Module({
//   imports: [TypeOrmModule.forFeature([Reviewer])],
//   controllers: [ReviewerController],
//   providers: [ReviewerService],
// })


@Global()
@Module({
  imports: [TypeOrmModule.forFeature([Reviewer,Post, Tutor])],
  controllers: [ReviewerController],
  providers: [ReviewerService, PostService, TutorService],
  exports:[ReviewerService, PostService, TutorService]
})
export class ReviewerModule {}

