import {Controller, Delete, Get, Query, Param, Body, Patch, UseGuards, ParseIntPipe } from '@nestjs/common'
import { TutorService } from './tutor.service';
import { AuthGuard } from '../auth/auth.guard'
import { ValidatePipe } from '../validate/validate.pipe';
import { HttpBearerGuard } from '../authorisation/http-bearer.guard';
import { TutorDetails } from '../authentication/dto/register-dto';
import { ApiTags, ApiOkResponse, ApiForbiddenResponse, ApiNotFoundResponse } from '@nestjs/swagger';
import { Role } from '../authentication/Roles/role.enum';
import { Roles } from '../authentication/Roles/roles.decorator';

@Controller('tutors')
// @UseGuards(new AuthGuard())

@ApiTags('Tutors')

  

export class TutorController{
   constructor(private tutorService: TutorService){}

   @Get()
   @ApiOkResponse({ description: 'The resource was returned successfully' })
  @ApiForbiddenResponse({ description: 'Unauthorized Request' })
//   @ApiNotFoundResponse({ description: 'Resource not found' })

    getPosts()
     {
        return this.tutorService.fetchPosts()
        }


   @Get('subject')
//    @ApiOkResponse({ description: 'The resource was returned successfully' })
//   @ApiForbiddenResponse({ description: 'Unauthorized Request' })
//   @ApiNotFoundResponse({ description: 'Resource not found' })
   @Roles(Role.Users)
   getBySubject(@Query('subject') subject: string) {
       return this.tutorService.getBySubject(subject)
   }

   @Get('location')
//    @ApiOkResponse({ description: 'The resource was returned successfully' })
//   @ApiForbiddenResponse({ description: 'Unauthorized Request' })
//   @ApiNotFoundResponse({ description: 'Resource not found' })
   @Roles(Role.Users)
   getByLocation(@Query('location') location: string) {
       return this.tutorService.getByLocation(location)
   }


   @Patch(':id')
   @Roles(Role.Tutor)
    async updateproduct(
    @Body() updateTutorDetails: TutorDetails,
    @Param('id',  ParseIntPipe) id: number) {
    return await this.tutorService.updateTutor(id,updateTutorDetails);
  }

   @UseGuards(HttpBearerGuard)
   @Delete(':email')
   @Roles(Role.Tutor)
   deleteByEmail(@Param('email') email: string) {
       return this.tutorService.deleteByEmail(email)
   }
   

   


   
}