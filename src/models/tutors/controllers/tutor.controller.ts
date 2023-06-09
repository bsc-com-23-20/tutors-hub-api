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
import { ApiTags, ApiResponse, ApiOperation } from '@nestjs/swagger';

@ApiTags('Tutors')
@Controller('tutors')
export class TutorController {
  constructor(private tutorService: TutorService) {}

  @Get()
  @ApiOperation({summary: 'gets all tutor accounts available, displays tutor information', 
  description: 'hit execute and you should be able to see all tutor details'})
  @ApiResponse({status:200, description: 'The resource was returned successfully' })
  @ApiResponse({status:500, description: 'Internal server error' })
  @ApiResponse({status:403, description: 'Not allowed access' })
  @ApiResponse({status:401, description: 'Unathourised' }) 
  @ApiResponse({status:400, description: 'Bad Request' })
  @ApiResponse({status:404, description: 'Not Found' })
  async getUsers() {
    return this.tutorService.getUsers();
  }

  @Post()
  @ApiOperation({summary: 'creates a new tutor account, tutor has to post information', 
  description: 'post tutors information as shown below,with the role specified as tutor'})
  @ApiResponse({status:201, description: 'The resource was created successfully' })
   @ApiResponse({status:500, description: 'Internal server error' })
   @ApiResponse({status:403, description: 'Not allowed access' })
   @ApiResponse({status:401, description: 'Unathourised' }) 
   @ApiResponse({status:400, description: 'Bad Request' })
   @ApiResponse({status:404, description: 'Not Found' })
  async createTutor(@Body(ValidationPipe) userData: CreateUserDto) {
    return this.tutorService.createUser(userData);
  }

  @Get(':id')
  @ApiOperation({summary: 'gets a tutor account with the specified id', 
  description: 'write the id of the tutor you want to retrieve'})
  @ApiResponse({status:200, description: 'The resource was returned successfully' })
  @ApiResponse({status:500, description: 'Internal server error' })
  @ApiResponse({status:403, description: 'Not allowed access' })
  @ApiResponse({status:401, description: 'Unathourised' }) 
  @ApiResponse({status:400, description: 'Bad Request' })
  @ApiResponse({status:404, description: 'Not Found' })
  async getUserById(@Param('id') id: number) {
    return this.tutorService.getUserById(id);
  }

  @Delete(':id')
  @ApiOperation({summary: 'deletes a tutor account with the specified id',
    description: 'enter the id of the tutor you want to delete'})
    @ApiResponse({status:200, description: 'delete was successful' })
    @ApiResponse({status:500, description: 'Internal server error' })
    @ApiResponse({status:403, description: 'Not allowed access' })
    @ApiResponse({status:401, description: 'Unathourised' }) 
    @ApiResponse({status:400, description: 'Bad Request' })
    @ApiResponse({status:404, description: 'Not Found' })
  async deleteUserById(@Param('id') id: number) {
    return this.tutorService.deleteUserById(id);
  }

  @Patch(':id')
  @ApiOperation({summary: 'updates tutor information of the specified id and saves the updated tutor',
  description: 'enter the id of the tutor to be updated and the updated details'})
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
    return this.tutorService.updateUserById(id, updateUserDto);
  }
}
