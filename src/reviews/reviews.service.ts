import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Reviews } from '../entity/Reviews';
import { Repository } from 'typeorm';
import { ReviewerDetails } from '../authentication/dto/reviews-dto'

@Injectable()
export class ReviewService {
    constructor(
        @InjectRepository(Reviews)
        private tutorRepository: Repository<Reviews>
    ){}

    async review(reviews: ReviewerDetails) {
        try {
            const review =  this.tutorRepository.create({...reviews})
            const savedReview = await this.tutorRepository.save(review)
          
            return savedReview
        } catch (error) {
            return error
        }
  
    }
    fetchReviews(){
        return this.tutorRepository.find()
    }

    async updateReviews(updateReview: ReviewerDetails, id: number) {
        return this.tutorRepository.update({id},{ ...updateReview});
      }

      async deleteById(id: number) {
        const response = await this.tutorRepository.delete({id})

        return response
    }

   
      
      

    
}
