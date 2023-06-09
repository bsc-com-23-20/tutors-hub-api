import { Module, Global } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostController } from '../controllers/post.controller';
import { PostService } from '../services/post.service';
import Post from '../entities/post';
import { ReviewerService } from '../../reviewers/services/reviewer.service';
import { ReviewerController } from '../../reviewers/controllers/reviewer.controller';
 import Reviewer from '../../reviewers/entities/reviewer';
import Tutor from '../../tutors/entities/tutor';
import { ReviewerModule } from '../../reviewers/module/reviewer.module';
import { TutorModule } from '../../tutors/module/tutor.module';


@Global()
@Module({
  imports: [TypeOrmModule.forFeature([Post,Reviewer])],
  
  controllers: [PostController],
  providers: [PostService, ReviewerService],
  exports: [PostService, ReviewerService],
})
export class PostModule {}
