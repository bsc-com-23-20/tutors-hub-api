import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TutorController } from '../controllers/tutor.controller';
import { TutorService } from '../services/tutor.service';
import Tutor from '../entities/tutor';
import { ReviewerService } from '../../reviewers/services/reviewer.service';
import { PostService } from '../../posts/services/post.service';
import Post from '../../posts/entities/post';
import Reviewer from '../../reviewers/entities/reviewer';



@Module({
  imports: [TypeOrmModule.forFeature([Tutor, Post, Reviewer])],
  controllers: [TutorController],
  providers: [TutorService, PostService, ReviewerService],
  exports: [TutorService, PostService, ReviewerService],
})
export class TutorModule {}
