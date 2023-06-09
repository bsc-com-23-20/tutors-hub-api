import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostController } from '../controllers/post.controller';
import { PostService } from '../services/post.service';
import Post from '../entities/post';
import Reviewer from '../../reviewers/entities/reviewer';
import { ReviewerService } from '../../reviewers/services/reviewer.service';

@Module({
  imports: [TypeOrmModule.forFeature([Post, Reviewer])],
  controllers: [PostController],
  providers: [PostService, ReviewerService],
  exports: [PostService, ReviewerService],
})
export class PostModule {}
