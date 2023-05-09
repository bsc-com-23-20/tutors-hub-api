import {Controller, Post, Body, Get } from '@nestjs/common'
import { ReviewService } from './reviews.service';
import { ReviewerDetails } from '../authentication/dto/reviews-dto';


@Controller('review')
export class ReviewController{
   constructor(private reviewService: ReviewService){}
   
  

   @Post('reviews')
   review(@Body()reviews : ReviewerDetails) {
    return this.reviewService.review(reviews)
    }

    @Get()
    getReviews()
     {
        return this.reviewService.fetchReviews()
        }

}