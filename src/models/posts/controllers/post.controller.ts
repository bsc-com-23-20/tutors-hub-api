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
import { PostService } from '../services/post.service';
import { CreatePostDto, UpdatePostDto, ReviewPostDto } from '../dtos/post.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('Posts')
@Controller('posts')
export class PostController {
  constructor(private postService: PostService) {}

  @Post(':tutorId')
  @ApiOperation({summary: "creates a post about a tutor with the specified tutorID",
  description: 'post information below as indicated specifying the tutorID we are making the post for'})
  @ApiResponse({status:201, description: 'The post was successfully created' })
    @ApiResponse({status:500, description: 'Internal server error' })
    @ApiResponse({status:403, description: 'Not allowed access' })
    @ApiResponse({status:401, description: 'Unathourised' }) 
    @ApiResponse({status:400, description: 'Bad Request' })
    @ApiResponse({status:404, description: 'Not Found' })
  async createPost(
    @Param('tutorId') tutorId: number,
    @Body(ValidationPipe) createPostDto: CreatePostDto,
  ) {
    return this.postService.createPost(tutorId, createPostDto);
  }

  @Get()
  @ApiOperation({summary: 'gets all the posts made by the tutors',
     description: 'the output of this route should return all the post of the tutors'})
     @ApiResponse({status:200, description: 'The resource was returned successfully' })
    @ApiResponse({status:500, description: 'Internal server error' })
    @ApiResponse({status:403, description: 'Not allowed access' })
    @ApiResponse({status:401, description: 'Unathourised' }) 
    @ApiResponse({status:400, description: 'Bad Request' })
    @ApiResponse({status:404, description: 'Not Found' })
  async getPosts() {
    return this.postService.getPosts();
  }

  @Get(':id')
 
  
@ApiOperation({summary: 'gets a post with the specified id',
      description: 'enter the id of the post you want to get'})
      @ApiResponse({status:200, description: 'The resource was returned successfully' })
    @ApiResponse({status:500, description: 'Internal server error' })
    @ApiResponse({status:403, description: 'Not allowed access' })
    @ApiResponse({status:401, description: 'Unathourised' }) 
    @ApiResponse({status:400, description: 'Bad Request' })
    @ApiResponse({status:404, description: 'Not Found' })
  async getPostById(@Param('id') id: number) {
    const post = await this.postService.getPostById(id);
    return { post };
  }


  @Get('subject/:subject')
  @ApiOperation({summary: 'gets posts with the specified subject',
  description: 'enter the subject of the posts you want to get'})
  @ApiResponse({status:200, description: 'The resource was returned successfully' })
@ApiResponse({status:500, description: 'Internal server error' })
@ApiResponse({status:403, description: 'Not allowed access' })
@ApiResponse({status:401, description: 'Unathourised' }) 
@ApiResponse({status:400, description: 'Bad Request' })
@ApiResponse({status:404, description: 'Not Found' })
  async getPostBySubject(@Param('subject') subject: string) {
    const post = await this.postService.getPostBySubject(subject);
    return { post };
  }

  @Get('location/:location')
  @ApiOperation({summary: 'gets posts with the specified location',
      description: 'enter the location of the posts you want to get'})
      @ApiResponse({status:200, description: 'The resource was returned successfully' })
    @ApiResponse({status:500, description: 'Internal server error' })
    @ApiResponse({status:403, description: 'Not allowed access' })
    @ApiResponse({status:401, description: 'Unathourised' }) 
    @ApiResponse({status:400, description: 'Bad Request' })
    @ApiResponse({status:404, description: 'Not Found' })
  async getPostByLocation(@Param('location') location: string) { 
    return this.postService.getPostByLocation(location);
  }

  @Patch(':id')
  @ApiOperation({summary: 'updates a post with the specified id',
  description: 'enter the id of the post you want to update and the updated details'})
  @ApiResponse({status:200, description: 'post updated successfully' })
@ApiResponse({status:500, description: 'Internal server error' })
@ApiResponse({status:403, description: 'Not allowed access' })
@ApiResponse({status:401, description: 'Unathourised' }) 
@ApiResponse({status:400, description: 'Bad Request' })
@ApiResponse({status:404, description: 'Not Found' })
  async updatePost(
    @Param('id') id: number,
    @Body(ValidationPipe) updatePostDto: UpdatePostDto,
  ) {
    return this.postService.updatePost(id, updatePostDto);
  }

  @Delete(':id')
  @ApiOperation({summary: 'deletes the post with the specified id', 
  description: 'enter the id of a particular post you want to delete '})
  @ApiResponse({status:200, description: 'successfully deleted the post ' })
    @ApiResponse({status:500, description: 'Internal server error' })
    @ApiResponse({status:403, description: 'Not allowed access' })
    @ApiResponse({status:401, description: 'Unathourised' }) 
    @ApiResponse({status:400, description: 'Bad Request' })
    @ApiResponse({status:404, description: 'Not Found' })
  async deletePost(@Param('id') id: number) {
    return this.postService.deletePost(id);
  }
  @Post(':id/review')
  @ApiOperation({summary: "posts a review about a particular tutor",
  description: 'indicate the id you eant to make a review for and post reviewer comments'})
  @ApiResponse({status:201, description: 'The post was successfully created' })
    @ApiResponse({status:500, description: 'Internal server error' })
    @ApiResponse({status:403, description: 'Not allowed access' })
    @ApiResponse({status:401, description: 'Unathourised' }) 
    @ApiResponse({status:400, description: 'Bad Request' })
    @ApiResponse({status:404, description: 'Not Found' })

    
    async reviewPost(
      @Param('id') id: number,
      @Body() reviewerData: ReviewPostDto,
    ) {
      return this.postService.reviewPost(id, reviewerData);
    }


  
}
