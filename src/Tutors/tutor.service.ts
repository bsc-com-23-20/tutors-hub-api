import {Injectable, UnauthorizedException, Delete} from '@nestjs/common'
import {InjectRepository} from '@nestjs/typeorm'
import {Repository} from 'typeorm'
import { Tutor } from '../entity/Tutor';
import { TutorDetails } from '../authentication/dto/register-dto';
import { LoginData } from '../authentication/dto/login-dto';

@Injectable()
export class TutorService{
    constructor(
        @InjectRepository(Tutor)
        private tutorReository: Repository<Tutor>
    ){}

    async getBySubject(subject: string) {
        try {
            const tutors = await this.tutorReository.findBy({subject})
            // if tutors are found 
            if(tutors) return tutors

            const deleteTutors = await this.tutorReository.delete({})
            
            
            // otherwise
            
        } catch (error) {
            return error
        }
    }

    
}