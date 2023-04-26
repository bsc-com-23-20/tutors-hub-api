import {Module} from '@nestjs/common'
import { ReviewService } from './reviews.service';
import { ReviewController } from './reviews.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Reviews } from '../entity/Reviews';


@Module({
    imports: [TypeOrmModule.forFeature([Reviews])],
    controllers: [ReviewController],
    providers: [ReviewService]
})
export class ReviewModule{}