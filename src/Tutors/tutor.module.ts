import {Module} from '@nestjs/common'
import { TutorService } from './tutor.service';
import { TutorController } from './tutor.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Tutor } from '../entity/Tutor';


@Module({
    imports: [TypeOrmModule.forFeature([Tutor])],
    controllers: [TutorController],
    providers: [TutorService]
})
export class TutorModule{}