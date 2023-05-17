import {Controller, Post, Body, Get, Put, ParseIntPipe, Param, Patch, Delete } from '@nestjs/common'
import { ReviewService } from './reviews.service';
import { ReviewerDetails } from '../authentication/dto/reviews-dto';
import { ApiTags, ApiBody } from '@nestjs/swagger';
import { Roles } from '../authentication/Roles/roles.decorator';
import { Role } from '../authentication/Roles/role.enum';


@Controller('review')
@ApiTags('Reviews')
export class ReviewController{
   constructor(private reviewService: ReviewService){}
   
  
  @ApiBody({type: ReviewerDetails})
   @Post('reviews')
   @Roles(Role.Users)
   review(@Body()reviews : ReviewerDetails) {
    return this.reviewService.review(reviews)
    }

    @Get()
    @Roles(Role.Users)
    getReviews()
    
     {
        return this.reviewService.fetchReviews()
        }


        @Patch(':id')
        @Roles(Role.Users)
    async updateproduct(
    @Body() updateReview: ReviewerDetails,
    @Param('id',  ParseIntPipe) id: number) {
    return await this.reviewService.updateReviews(updateReview, id);
  }

  

  @Delete(':id')
  @Roles(Role.Users)
  async deleteProductById(@Param('id', ParseIntPipe) id: number,){
    await this.reviewService.deleteById(id)
  }
  


    
//     @Patch(':id')
//   update(@Param('id') id: number, @Body() updateDetails: ReviewerDetails) {
//     return this.reviewService.update(+id,);
//   }
       

}