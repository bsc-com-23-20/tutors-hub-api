import {Module} from '@nestjs/common'
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Tutor } from '../entity/Tutor';

@Module({
    imports: [TypeOrmModule.forFeature([Tutor])],
    controllers: [AuthController],
    providers: [AuthService]
})
export class AuthModule{}