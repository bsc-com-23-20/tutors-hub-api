import {Controller, Post, Body, Get, Put, ParseIntPipe, Param, Patch, Delete } from '@nestjs/common'
import { ReviewService } from './reviews.service';
import { ReviewerDetails } from '../authentication/dto/reviews-dto';
import { ApiTags } from '@nestjs/swagger';


@Controller('review')
@ApiTags('Reviews')
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

        @Patch(':id')
    async updateproduct(
    @Body() updateReview: ReviewerDetails,
    @Param('id',  ParseIntPipe) id: number) {
    return await this.reviewService.updateReviews(updateReview, id);
  }

  

  @Delete(':id')
  async deleteProductById(@Param('id', ParseIntPipe) id: number,){
    await this.reviewService.deleteById(id)
  }
  


    
//     @Patch(':id')
//   update(@Param('id') id: number, @Body() updateDetails: ReviewerDetails) {
//     return this.reviewService.update(+id,);
//   }
       

}