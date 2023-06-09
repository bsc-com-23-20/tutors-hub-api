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
import { CreatePostDto, UpdatePostDto } from '../dtos/post.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Posts')
@Controller('posts')
export class PostController {
  constructor(private postService: PostService) {}

  @Post(':tutorId')
  async createPost(
    @Param('tutorId') tutorId: number,
    @Body(ValidationPipe) createPostDto: CreatePostDto,
  ) {
    return this.postService.createPost(tutorId, createPostDto);
  }

  @Get()
  async getPosts() {
    return this.postService.getPosts();
  }

  @Get(':id')
  async getPostById(@Param('id') id: number) {
    const post = await this.postService.getPostById(id);
    return { post };
  }


  @Get(':subject')
  async getPostBySubject(@Param('subject') subject: string) {
    const post = await this.postService.getPostBySubject(subject);
    return { post };
  }

  @Get(':location')
  async getPostByLocation(@Param('location') location: string) {
    const post = await this.postService.getPostBySubject(location);
    return { post };
  }

  @Patch(':id')
  async updatePost(
    @Param('id') id: number,
    @Body(ValidationPipe) updatePostDto: UpdatePostDto,
  ) {
    return this.postService.updatePost(id, updatePostDto);
  }

  @Delete(':id')
  async deletePost(@Param('id') id: number) {
    return this.postService.deletePost(id);
  }
  @Post(':id/review')
  async reviewPost(
    @Param('id') id: number,
    @Body() reviewerData: { reviewerId: number; comments: string[] },
  ) {
    return this.postService.reviewPost(id, reviewerData);
  }
}
