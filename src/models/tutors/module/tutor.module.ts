import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TutorController } from '../controllers/tutor.controller';
import { TutorService } from '../services/tutor.service';
import Tutor from '../entities/tutor';

@Module({
  imports: [TypeOrmModule.forFeature([Tutor])],
  controllers: [TutorController],
  providers: [TutorService],
})
export class TutorModule {}
