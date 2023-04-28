import {Module} from '@nestjs/common'
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Tutor } from '../entity/Tutor';
import { HttpBearerStrategy } from '../authorisation/passport-http.strategy';
import { PassportModule } from '@nestjs/passport';

@Module({
    imports: [TypeOrmModule.forFeature([Tutor]), PassportModule],
    controllers: [AuthController],
    providers: [AuthService, HttpBearerStrategy]
})
export class AuthModule{}