import {Injectable, UnauthorizedException, Delete, Get, Param, } from '@nestjs/common'
import {InjectRepository} from '@nestjs/typeorm'
import {Repository, FindOptionsWhere} from 'typeorm'
import { Tutor } from '../entity/Tutor';
import { TutorDetails } from '../authentication/dto/register-dto';
import { LoginData } from '../authentication/dto/login-dto';
import { stringLiteral } from '@babel/types';

@Injectable()
export class TutorService{
    usersService: any;
    constructor(
        @InjectRepository(Tutor)
        private tutorReository: Repository<Tutor>
    ){}

    fetchPosts(){
        return this.tutorReository.find({relations: {reviews: true}, select: {reviews: {firstName: true, lastName: true, comment: true}} })
    }

    getById(id: number){
    return this.tutorReository.findOneById(id);
  }

    // async findByUsername(username: string): Promise< | undefined> {
    //     return this.tutorReository.findOne({ username });
    //   }

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

    async getByLocation(location: string) {
        try {
            const options: FindOptionsWhere<Tutor> = { location };
            const tutors = await this.tutorReository.findOneBy(options);
            // const tutors = await this.tutorReository.findOneBy({location})
            // if tutors are found 
            if(tutors) return tutors
            // otherwise
            
        } catch (error) {
            return error
        }

    
}
}