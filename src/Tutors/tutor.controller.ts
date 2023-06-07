import {Controller, Delete, Get, Query, Param, Body, Patch, UseGuards, ParseIntPipe } from '@nestjs/common'
import { TutorService } from './tutor.service';
import { AuthGuard } from '../auth/auth.guard'
import { ValidatePipe } from '../validate/validate.pipe';
import { HttpBearerGuard } from '../authorisation/http-bearer.guard';
import { TutorDetails } from '../authentication/dto/register-dto';
import { ApiTags, ApiOkResponse, ApiForbiddenResponse, ApiNotFoundResponse, ApiUnprocessableEntityResponse, ApiOperation } from '@nestjs/swagger';
import { Role } from '../authentication/Roles/role.enum';
import { Roles } from '../authentication/Roles/roles.decorator';
import { query } from 'express';

@Controller('tutors')
// @UseGuards(new AuthGuard())

@ApiTags('Tutors')

  

export class TutorController{
   constructor(private tutorService: TutorService){}

   @Get()
   @ApiOperation({summary: 'gets all tutor accounts available, displays tutor information', description: 'hit execute and you should be able to see all tutor details'})
   @ApiOkResponse({ description: 'The resource was returned successfully' })
  @ApiForbiddenResponse({ description: 'Unauthorized Request' })
//   @ApiNotFoundResponse({ description: 'Resource not found' })

    getPosts()
     {
        return this.tutorService.fetchPosts()
        }

        
       
        @Get(':id')
        @ApiOperation({summary: 'gets a tutor account with the specified id', description: 'write the id of the tutor you want to retrieve'})
        findOne(@Param('id') id: number) {
        return this.tutorService.getById(id);
  }



   @Get('subject')
   @ApiOperation({summary: 'looks for a tutor with a matching subject as the one specified', description:'enter the subject of tutor to be returned, outputs tutors with that subject'})
//    @ApiOkResponse({ description: 'The resource was returned successfully' })
//   @ApiForbiddenResponse({ description: 'Unauthorized Request' })
//   @ApiNotFoundResponse({ description: 'Resource not found' })
   @Roles(Role.Users)
   getBySubject(@Query('subject') subject: string) {
       return this.tutorService.getBySubject(subject);
   }

   @Get('location')
   @ApiOperation({summary: 'looks for a tutor with a matching location as the one specified',description: 'enter the location of tutor to be returned, outputs tutors in that location'})
//    @ApiOkResponse({ description: 'The resource was returned successfully' })
//   @ApiForbiddenResponse({ description: 'Unauthorized Request' })
//   @ApiNotFoundResponse({ description: 'Resource not found' })
   @Roles(Role.Users)
   getByLocation(@Query('location') location: string) {
       return this.tutorService.getByLocation(location)
   }


   @Patch(':id')
   @ApiOperation({summary: 'updates tutor information of the specified id and saves the updated tutor', description: 'enter the id of the tutor to be updated and the updated details'})
   @ApiOkResponse({ description: 'The resource was updated successfully' })
  @ApiNotFoundResponse({ description: 'Resource not found' })
  @ApiForbiddenResponse({ description: 'Unauthorized Request' })
  @ApiUnprocessableEntityResponse({ description: 'Bad Request' })
   @Roles(Role.Tutor)
    async updateproduct(
    @Body() updateTutorDetails: TutorDetails,
    @Param('id',  ParseIntPipe) id: number) {
    return await this.tutorService.updateTutor(id,updateTutorDetails);
  }

   @UseGuards(HttpBearerGuard)
   @Delete(':email')
   @ApiOperation({summary: 'deletes a tutor account with the specified email', description: 'enter the email address of the tutor you want to delete'})
   @Roles(Role.Tutor)
   deleteByEmail(@Param('email') email: string) {
       return this.tutorService.deleteByEmail(email)
   }
   

   


   
}