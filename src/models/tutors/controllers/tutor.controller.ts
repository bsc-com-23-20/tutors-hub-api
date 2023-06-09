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
import { TutorService } from '../services/tutor.service';
import { CreateUserDto, UpdateUserDto } from '../dtos/tutor.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Tutors')
@Controller('tutors')
export class TutorController {
  constructor(private tutorService: TutorService) {}

  @Get()
  async getUsers() {
    return this.tutorService.getUsers();
  }
  
  @Post()
  async createTutor(@Body(ValidationPipe) userData: CreateUserDto) {
    return this.tutorService.createUser(userData);
  }

  @Get(':id')
  async getUserById(@Param('id') id: number) {
    return this.tutorService.getUserById(id);
  }

  @Delete(':id')
  async deleteUserById(@Param('id') id: number) {
    return this.tutorService.deleteUserById(id);
  }

  @Patch(':id')
  async updateUserById(
    @Param('id') id: number,
    @Body(ValidationPipe) updateUserDto: UpdateUserDto,
  ) {
    return this.tutorService.updateUserById(id, updateUserDto);
  }
}
