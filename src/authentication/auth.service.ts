import {Injectable} from '@nestjs/common'
import {InjectRepository} from '@nestjs/typeorm'
import {Repository} from 'typeorm'
import { Tutor } from '../entity/Tutor';

@Injectable()
export class AuthService{
    constructor(
        @InjectRepository(Tutor)
        private tutorReository: Repository<Tutor>
    ){}
    signin(){

return 'signin'
    }
    async signup(){
       const tutorAccount = await this.tutorReository.find({})
      return tutorAccount
    }
}