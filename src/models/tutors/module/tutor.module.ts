import { Module, Global } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TutorController } from '../controllers/tutor.controller';
import { TutorService } from '../services/tutor.service';
import Tutor from '../entities/tutor';
import Post from '../../posts/entities/post';
import { PostService } from '../../posts/services/post.service';
import { ReviewerService } from '../../reviewers/services/reviewer.service';
import Reviewer from '../../reviewers/entities/reviewer';
import { ReviewerModule } from '../../reviewers/module/reviewer.module';
import { PostModule } from '../../posts/module/post.module';
//import Reviewer from '../../reviewers/entities/reviewer';
//import { ReviewerService } from '../../reviewers/services/reviewer.service';
//import { ReviewerController } from '../../reviewers/controllers/reviewer.controller';

@Global()
@Module({
  imports: [TypeOrmModule.forFeature([Tutor,Post])],
  controllers: [TutorController],
  providers: [TutorService, PostService],
  exports: [TutorService, PostService],
})

export class TutorModule {}