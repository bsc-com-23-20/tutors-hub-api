import {Module} from '@nestjs/common'
import { ReviewService } from './reviews.service';
import { ReviewController } from './reviews.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Tutor } from '../entity/Tutor';


@Module({
    imports: [TypeOrmModule.forFeature([Tutor])],
    controllers: [ReviewController],
    providers: [ReviewService]
})
export class ReviewModule{}