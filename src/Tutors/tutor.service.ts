import {Injectable, UnauthorizedException, Delete, } from '@nestjs/common'
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
            const tutors = await this.tutorReository.findOneBy({subject})
            // if tutors are found 
            if(tutors) return tutors
            // otherwise
            
        } catch (error) {
            return error
        }
        
    }

    // async updateProduct(updateProductDetails: UpdateProductDto, product_id: number) {
    //     return this.productsRepository.update({product_id},{ ...updateProductDetails});
    //   }

    async deleteByEmail(email: string) {
        const response = await this.tutorReository.delete({emailAddress: email})

        return response
    }

       async updateTutor(id: number, updateTutorDetails: TutorDetails) {
        await this.tutorReository.update({id}, {...updateTutorDetails})
    }

    
}