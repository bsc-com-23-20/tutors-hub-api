import {Controller, Post, Body, Get, Put, ParseIntPipe, Param, Patch, Delete } from '@nestjs/common'
import { ReviewService } from './reviews.service';
import { ReviewerDetails } from '../authentication/dto/reviews-dto';
import { ApiTags, ApiBody, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { Roles } from '../authentication/Roles/roles.decorator';
import { Role } from '../authentication/Roles/role.enum';


@Controller('review')
@ApiTags('Reviews')
export class ReviewController{
   constructor(private reviewService: ReviewService){}
   
  
  @ApiBody({type: ReviewerDetails})
   @Post('reviews')
   @ApiOperation({summary: "reviewer posts feedback or comments on a tutor's service with the specified id",
  description: 'post information about a review, tutorID is the id of the tutor we are reviewing'})
  @ApiResponse({status:201, description: 'The resource was successfully created' })
    @ApiResponse({status:500, description: 'Internal server error' })
    @ApiResponse({status:403, description: 'Not allowed access' })
    @ApiResponse({status:401, description: 'Unathourised' }) 
    @ApiResponse({status:400, description: 'Bad Request' })
    @ApiResponse({status:404, description: 'Not Found' })

   @Roles(Role.Users)
   review(@Body()reviews : ReviewerDetails) {
    return this.reviewService.review(reviews)
    }

    @Get()
    @ApiOperation({summary: 'gets all the reviews, displays all information about reviews',
     description: 'the output of this route should return all the reviews in the database'})
     @ApiResponse({status:200, description: 'The resource was returned successfully' })
    @ApiResponse({status:500, description: 'Internal server error' })
    @ApiResponse({status:403, description: 'Not allowed access' })
    @ApiResponse({status:401, description: 'Unathourised' }) 
    @ApiResponse({status:400, description: 'Bad Request' })
    @ApiResponse({status:404, description: 'Not Found' })
    @Roles(Role.Users)
    getReviews()
    
     {
        return this.reviewService.fetchReviews()
        }

        @Get(':id')
        @ApiOperation({summary: 'gets a review about the specified id, displays reviewer information',
      description: 'enter the id of the review you want to get'})
      @ApiResponse({status:200, description: 'The resource was returned successfully' })
    @ApiResponse({status:500, description: 'Internal server error' })
    @ApiResponse({status:403, description: 'Not allowed access' })
    @ApiResponse({status:401, description: 'Unathourised' }) 
    @ApiResponse({status:400, description: 'Bad Request' })
    @ApiResponse({status:404, description: 'Not Found' })
        findOne(@Param('id') id: number) {
        return this.reviewService.getById(id);
  }


    @Patch(':id')
    @ApiOperation({summary: 'updates review information of the specified review',
    description: 'emter the id of the review you want to update'})
    @ApiResponse({status:200, description: 'The resource was updated successfully' })
    @ApiResponse({status:500, description: 'Internal server error' })
    @ApiResponse({status:403, description: 'Not allowed access' })
    @ApiResponse({status:401, description: 'Unathourised' }) 
    @ApiResponse({status:400, description: 'Bad Request' })
    @ApiResponse({status:404, description: 'Not Found' })
    @Roles(Role.Users)
    async updateproduct(
    @Body() updateReview: ReviewerDetails,
    @Param('id',  ParseIntPipe) id: number) {
    return await this.reviewService.updateReviews(updateReview, id);
  }

  

  @Delete(':id')
  @ApiOperation({summary: 'deletes the review of the specified id in the database', 
  description: 'enter the id of a particular review you want to delete '})
  @ApiResponse({status:200, description: 'successfully deleted the review ' })
    @ApiResponse({status:500, description: 'Internal server error' })
    @ApiResponse({status:403, description: 'Not allowed access' })
    @ApiResponse({status:401, description: 'Unathourised' }) 
    @ApiResponse({status:400, description: 'Bad Request' })
    @ApiResponse({status:404, description: 'Not Found' })
  @Roles(Role.Users)
  async deleteProductById(@Param('id', ParseIntPipe) id: number,){
    await this.reviewService.deleteById(id)
  }
  




}