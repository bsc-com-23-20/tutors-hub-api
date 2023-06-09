import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostController } from '../controllers/post.controller';
import { PostService } from '../services/post.service';
import Post from '../entities/post';
import Reviewer from '../../reviewers/entities/reviewer';
import { ReviewerService } from '../../reviewers/services/reviewer.service';
// import { ReviewerService } from 'src/models/reviewers/services/reviewer.service';
// import { ReviewerController } from 'src/models/reviewers/controllers/reviewer.controller';
// import Reviewer from 'src/models/reviewers/entities/reviews';

@Module({
  imports: [TypeOrmModule.forFeature([Post, Reviewer])],
  controllers: [PostController],
  providers: [PostService, ReviewerService],
  exports: [PostService, ReviewerService],
})
export class PostModule {}
