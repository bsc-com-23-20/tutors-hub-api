import {Injectable, UnauthorizedException, UseGuards} from '@nestjs/common'
import {InjectRepository} from '@nestjs/typeorm'
import {Repository} from 'typeorm'
import { Tutor } from '../entity/Tutor';
import { TutorDetails } from './dto/register-dto';
import { LoginData } from './dto/login-dto';
import { JwtService } from '@nestjs/jwt';


@Injectable()
export class AuthService{
    constructor(
        @InjectRepository(Tutor)
        private tutorReository: Repository<Tutor>
    ){}
   async signin(loginData: LoginData){
        try {
        const user = await this.tutorReository.findOneBy({emailAddress: loginData.emailAddress})
        // if there is  a user
        if(user) return user
            // otherwise
        return new UnauthorizedException('Email does not exist')
        } catch (error) {
            return error
        }
    }

    //  async signin(loginData: LoginData): Promise<any> {
    // const user = await this.tutorReository.findOne({emailAddress: loginData.emailAddress});
    // if (user?.password !== pass) {
    //   throw new UnauthorizedException();
    // }
    // const { password, ...result } = user;
    // // TODO: Generate a JWT and return it here
    // // instead of the user object
    // return result;
  
     @UseGuards()
    async signup(tutorDetails: TutorDetails) {
        try {
            const tutor =  this.tutorReository.create({...tutorDetails})
            const tutorAccount= await this.tutorReository.save(tutor)
          
            return tutorAccount
        } catch (error) {
            return error
        }
    }

    validateUser(token: string): { username: string, password: string } {
        // Logic to validate the token and return the user object
        return { username: 'user', password: 'password' };
      }
}