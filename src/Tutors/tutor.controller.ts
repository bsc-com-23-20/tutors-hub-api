import {Controller, Delete, Get, Query, Param, Body, Patch, UseGuards, ParseIntPipe } from '@nestjs/common'
import { TutorService } from './tutor.service';
import { AuthGuard } from '../auth/auth.guard'
import { ValidatePipe } from '../validate/validate.pipe';
import { HttpBearerGuard } from '../authorisation/http-bearer.guard';
import { TutorDetails } from '../authentication/dto/register-dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('tutors')
// @UseGuards(new AuthGuard())

@ApiTags('Tutors')

  

export class TutorController{
   constructor(private tutorService: TutorService){}

   @Get()
    getPosts()
     {
        return this.tutorService.fetchPosts()
        }


   @Get('subject')
   getBySubject(@Query('subject') subject: string) {
       return this.tutorService.getBySubject(subject)
   }

   @Get('location')
   getByLocation(@Query('location') location: string) {
       return this.tutorService.getByLocation(location)
   }


   @Patch(':id')
    async updateproduct(
    @Body() updateTutorDetails: TutorDetails,
    @Param('id',  ParseIntPipe) id: number) {
    return await this.tutorService.updateTutor(id,updateTutorDetails);
  }

   @UseGuards(HttpBearerGuard)
   @Delete(':email')
   deleteByEmail(@Param('email') email: string) {
       return this.tutorService.deleteByEmail(email)
   }
   

   


   
}