import {Injectable, UnauthorizedException} from '@nestjs/common'
import {InjectRepository} from '@nestjs/typeorm'
import {Repository} from 'typeorm'
import { Tutor } from '../entity/Tutor';
import { TutorDetails } from './dto/register-dto';
import { LoginData } from './dto/login-dto';

@Injectable()
export class AuthService{
    constructor(
        @InjectRepository(Tutor)
        private tutorReository: Repository<Tutor>
    ){}
   async signin(loginData: LoginData){
        try {
        const user = await this.tutorReository.findOneBy({emailAddress: loginData.email})
        // if there is  a user
        if(user) return user
            // otherwise
        return new UnauthorizedException('Email does not exist')
        } catch (error) {
            return error
        }
    }
    async signup(tutorDetails: TutorDetails) {
        try {
            const tutor =  this.tutorReository.create({...tutorDetails})
            const tutorAccount= await this.tutorReository.save(tutor)
          
            return tutorAccount
        } catch (error) {
            return error
        }
    }
}