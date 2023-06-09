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
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Reviews')
@Controller('reviewers')
export class ReviewerController {
  constructor(private reviewerService: ReviewerService) {}

  @Get()
  async getUsers() {
    return this.reviewerService.getUsers();
  }

  @Post()
  async createTutor(@Body(ValidationPipe) userData: CreateUserDto) {
    return this.reviewerService.createUser(userData);
  }

  @Get(':id')
  async getUserById(@Param('id') id: number) {
    return this.reviewerService.getUserById(id);
  }

  @Delete(':id')
  async deleteUserById(@Param('id') id: number) {
    return this.reviewerService.deleteUserById(id);
  }

  @Patch(':id')
  async updateUserById(
    @Param('id') id: number,
    @Body(ValidationPipe) updateUserDto: UpdateUserDto,
  ) {
    return this.reviewerService.updateUserById(id, updateUserDto);
  }
}
