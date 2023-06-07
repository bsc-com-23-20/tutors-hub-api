import {Controller, Delete, Get, Query, Param, Body, Patch, UseGuards, ParseIntPipe } from '@nestjs/common'
import { TutorService } from './tutor.service';
import { AuthGuard } from '../auth/auth.guard'
import { ValidatePipe } from '../validate/validate.pipe';
import { HttpBearerGuard } from '../authorisation/http-bearer.guard';
import { TutorDetails } from '../authentication/dto/register-dto';
import { ApiTags, ApiOkResponse, ApiForbiddenResponse, ApiNotFoundResponse, ApiUnprocessableEntityResponse, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { Role } from '../authentication/Roles/role.enum';
import { Roles } from '../authentication/Roles/roles.decorator';
import { query } from 'express';

@Controller('tutors')
// @UseGuards(new AuthGuard())

@ApiTags('Tutors')

  

export class TutorController{
   constructor(private tutorService: TutorService){}

   @Get()
   @ApiOperation({summary: 'gets all tutor accounts available, displays tutor information', 
   description: 'hit execute and you should be able to see all tutor details'})
   @ApiResponse({status:200, description: 'The resource was returned successfully' })
   @ApiResponse({status:500, description: 'Internal server error' })
   @ApiResponse({status:403, description: 'Not allowed access' })
   @ApiResponse({status:401, description: 'Unathourised' }) 
   @ApiResponse({status:400, description: 'Bad Request' })
   @ApiResponse({status:404, description: 'Not Found' })


    getPosts()
     {
        return this.tutorService.fetchPosts()
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
       


        findOne(@Param('id') id: number) {
        return this.tutorService.getById(id);
  }



   @Get('subject/:subject')
   @ApiOperation({summary: 'looks for a tutor with a matching subject as the one specified', 
   description:'enter the subject of tutor to be returned, outputs tutors with that subject'})
   @ApiResponse({status:200, description: 'The resource was returned successfully' })
    @ApiResponse({status:500, description: 'Internal server error' })
    @ApiResponse({status:403, description: 'Not allowed access' })
    @ApiResponse({status:401, description: 'Unathourised' }) 
    @ApiResponse({status:400, description: 'Bad Request' })
    @ApiResponse({status:404, description: 'Not Found' })
       
   @Roles(Role.Users)
   getBySubject(@Param('subject') subject: string) {
       return this.tutorService.getBySubject(subject);
   }

   @Get('location/:location')
   @ApiOperation({summary: 'looks for a tutor with a matching location as the one specified',
   description: 'enter the location of tutor to be returned, outputs tutors in that location'})
   @ApiResponse({status:200, description: 'The resource was returned successfully' })
    @ApiResponse({status:500, description: 'Internal server error' })
    @ApiResponse({status:403, description: 'Not allowed access' })
    @ApiResponse({status:401, description: 'Unathourised' }) 
    @ApiResponse({status:400, description: 'Bad Request' })
    @ApiResponse({status:404, description: 'Not Found' })
   @Roles(Role.Users)
   getByLocation(@Query('location') location: string) {
       return this.tutorService.getByLocation(location)
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
     @Roles(Role.Tutor)
    async updateproduct(
    @Body() updateTutorDetails: TutorDetails,
    @Param('id',  ParseIntPipe) id: number) {
    return await this.tutorService.updateTutor(id,updateTutorDetails);
  }

  // @UseGuards(HttpBearerGuard)
   @Delete(':email')
   @ApiOperation({summary: 'deletes a tutor account with the specified email',
    description: 'enter the email address of the tutor you want to delete'})
    @ApiResponse({status:200, description: 'delete was successful' })
    @ApiResponse({status:500, description: 'Internal server error' })
    @ApiResponse({status:403, description: 'Not allowed access' })
    @ApiResponse({status:401, description: 'Unathourised' }) 
    @ApiResponse({status:400, description: 'Bad Request' })
    @ApiResponse({status:404, description: 'Not Found' })
   @Roles(Role.Tutor)
   deleteByEmail(@Param('email') email: string) {
       return this.tutorService.deleteByEmail(email)
   }
   

   


   
}