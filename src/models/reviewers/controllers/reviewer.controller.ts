import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  ValidationPipe,
} from '@nestjs/common';
import { ReviewerService } from '../services/reviewer.service';
import { CreateUserDto, UpdateUserDto } from '../dtos/reviewer.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('Reviews')
@Controller('reviewers')
export class ReviewerController {
  constructor(private reviewerService: ReviewerService) {}

  @Get()
  @ApiOperation({summary: 'gets all the reviews, displays all information about reviews',
  description: 'the output of this route should return all the reviews in the database'})
  @ApiResponse({status:200, description: 'The resource was returned successfully' })
 @ApiResponse({status:500, description: 'Internal server error' })
 @ApiResponse({status:403, description: 'Not allowed access' })
 @ApiResponse({status:401, description: 'Unathourised' }) 
 @ApiResponse({status:400, description: 'Bad Request' })
 @ApiResponse({status:404, description: 'Not Found' })
  async getUsers() {
    return this.reviewerService.getUsers();
  }

  @Post()
  @ApiOperation({summary: "reviewer creates an account to be able to make a review on a particular tutor",
  description: 'post information about a reviewer, with the role as a reviewer'})
  @ApiResponse({status:201, description: 'The resource was successfully created' })
    @ApiResponse({status:500, description: 'Internal server error' })
    @ApiResponse({status:403, description: 'Not allowed access' })
    @ApiResponse({status:401, description: 'Unathourised' }) 
    @ApiResponse({status:400, description: 'Bad Request' })
    @ApiResponse({status:404, description: 'Not Found' })
  async createTutor(@Body(ValidationPipe) userData: CreateUserDto) {
    return this.reviewerService.createUser(userData);
  }

  @Get(':id')
  @ApiOperation({summary: 'gets a reviewer with the specified id, displays reviewer information',
  description: 'enter the id of the reviewer you want to get'})
  @ApiResponse({status:200, description: 'The resource was returned successfully' })
@ApiResponse({status:500, description: 'Internal server error' })
@ApiResponse({status:403, description: 'Not allowed access' })
@ApiResponse({status:401, description: 'Unathourised' }) 
@ApiResponse({status:400, description: 'Bad Request' })
@ApiResponse({status:404, description: 'Not Found' })
  async getUserById(@Param('id') id: number) {
    return this.reviewerService.getUserById(id);
  }

  @Delete(':id')
  @ApiOperation({summary: 'deletes the reviewer of the specified id in the database', 
  description: 'enter the id of a particular review you want to delete '})
  @ApiResponse({status:200, description: 'successfully deleted the review ' })
    @ApiResponse({status:500, description: 'Internal server error' })
    @ApiResponse({status:403, description: 'Not allowed access' })
    @ApiResponse({status:401, description: 'Unathourised' }) 
    @ApiResponse({status:400, description: 'Bad Request' })
    @ApiResponse({status:404, description: 'Not Found' })
  async deleteUserById(@Param('id') id: number) {
    return this.reviewerService.deleteUserById(id);
  }

  @Patch(':id')
  @ApiOperation({summary: 'updates reviewer information of the specified reviewer',
    description: 'emter the id of the review you want to update'})
    @ApiResponse({status:200, description: 'The resource was updated successfully' })
    @ApiResponse({status:500, description: 'Internal server error' })
    @ApiResponse({status:403, description: 'Not allowed access' })
    @ApiResponse({status:401, description: 'Unathourised' }) 
    @ApiResponse({status:400, description: 'Bad Request' })
    @ApiResponse({status:404, description: 'Not Found' })
  async updateUserById(
    @Param('id') id: number,
    @Body(ValidationPipe) updateUserDto: UpdateUserDto,
  ) {
    return this.reviewerService.updateUserById(id, updateUserDto);
  }
}
