import { Injectable } from '@nestjs/common';
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
            const ReviewerDetails = await this.tutorRepository.save(review)
          
            return review
        } catch (error) {
            return error
        }
  
    }
}