import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ReviewerController } from '../controllers/reviewer.controller';
import { ReviewerService } from '../services/reviewer.service';
import Reviewer from '../entities/reviewer';

@Module({
  imports: [TypeOrmModule.forFeature([Reviewer])],
  controllers: [ReviewerController],
  providers: [ReviewerService],
})
export class ReviewerModule {}
