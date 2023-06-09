import {
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import Post from '../entities/post';
import { CreatePostDto, ReviewPostDto, UpdatePostDto } from '../dtos/post.dto';
import Reviewer from '../../reviewers/entities/reviewer';
import { ReviewerService } from '../../reviewers/services/reviewer.service';

@Injectable()
export class PostService {
  constructor(
    @InjectRepository(Post)
    private readonly postRepo: Repository<Post>,
    private readonly reviewerService: ReviewerService,
  ) {}

  async createPost(
    tutorId: number,
    createPostDto: CreatePostDto,
  ): Promise<Post> {
    const post = this.postRepo.create({
      ...createPostDto,
      tutor: { id: tutorId },
    });
    return this.postRepo.save(post);
  }

  async getPosts(): Promise<Post[]> {
    return this.postRepo.find({ relations: ['tutor'] });
  }

  async reviewPost(postId: number, reviewerData: ReviewPostDto): Promise<Post> {
    const post = await this.postRepo.findOne({
      where: {
        id: postId,
      },
      relations: {
        reviewer: true,
      },
    });
    if (!post) {
      throw new NotFoundException('Post not found');
    }

    const { reviewerId, comments } = reviewerData;

    const reviewer = await this.reviewerService.getUserById(reviewerId);
    if (!reviewer) {
      throw new NotFoundException('Reviewer not found');
    }

    post.reviewed = true;
    post.reviewer = reviewer;
    post.comments = post.comments || []; // Initialize the comments array if it's null
    post.comments.push(...comments);
    return this.postRepo.save(post);
  }
  async getPostById(id: number): Promise<Post> {
    const post = await this.postRepo.findOneBy({ id });
    if (!post) {
      throw new NotFoundException('Post not found');
    }
    return post;
  }

  async getPostBySubject(subject: string): Promise<Post> {
    const post = await this.postRepo.findOneBy({ subject: subject });
    if (!post) {
      throw new NotFoundException('Post not found');
    }
    return post;
  }

  async getPostByLocation(location: string): Promise<Post> {
    const post = await this.postRepo.findOneBy({ location: location });
    if (!post) {
      throw new NotFoundException('Post not found');
    }
    return post;
  }

  async updatePost(id: number, updatePostDto: UpdatePostDto) {
    const post = await this.getPostById(id);
    if (!post) {
      throw new NotFoundException('Post not found');
    }
    await this.postRepo.update(id, updatePostDto);
    return HttpStatus.OK, 'Post updated successfully';
  }

  async deletePost(id: number) {
    const post = await this.getPostById(id);
    if (!post) {
      throw new NotFoundException('Post not found');
    }
    await this.postRepo.remove(post);
    return HttpStatus.OK, 'Post removed successfully';
  }
}
