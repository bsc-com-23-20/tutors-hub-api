import {Controller, Post, Body, Get, Put, ParseIntPipe, Param, Patch, Delete } from '@nestjs/common'
import { ReviewService } from './reviews.service';
import { ReviewerDetails } from '../authentication/dto/reviews-dto';
import { ApiTags, ApiBody, ApiOperation } from '@nestjs/swagger';
import { Roles } from '../authentication/Roles/roles.decorator';
import { Role } from '../authentication/Roles/role.enum';


@Controller('review')
@ApiTags('Reviews')
export class ReviewController{
   constructor(private reviewService: ReviewService){}
   
  
  @ApiBody({type: ReviewerDetails})
   @Post('reviews')
   @ApiOperation({summary: 'reviewer post feedback or comments on a the tutors service with the specified id',
  description: 'post information about a review, tutorID is the id of the tutor we are reviewing'})
   @Roles(Role.Users)
   review(@Body()reviews : ReviewerDetails) {
    return this.reviewService.review(reviews)
    }

    @Get()
    @ApiOperation({summary: 'gets all the reviews, displays all information about reviews',
     description: 'the output of this route should return all the reviews in the database'})
    @Roles(Role.Users)
    getReviews()
    
     {
        return this.reviewService.fetchReviews()
        }

        @Get(':id')
        @ApiOperation({summary: 'gets a review about the specified id, displays reviewer information',
      description: 'enter the id of the review you want to get'})
        findOne(@Param('id') id: number) {
        return this.reviewService.getById(id);
  }


    @Patch(':id')
    @ApiOperation({summary: 'updates review information of the specified review',
    description: 'emter the id of the review you want to update'})
    @Roles(Role.Users)
    async updateproduct(
    @Body() updateReview: ReviewerDetails,
    @Param('id',  ParseIntPipe) id: number) {
    return await this.reviewService.updateReviews(updateReview, id);
  }

  

  @Delete(':id')
  @ApiOperation({summary: 'deletes the review of the specified id in the database', 
  description: 'enter the id of a particular review you want to delete '})
  @Roles(Role.Users)
  async deleteProductById(@Param('id', ParseIntPipe) id: number,){
    await this.reviewService.deleteById(id)
  }
  




}