import {Controller, Delete, Get, Query, Param, Body, UseGuards } from '@nestjs/common'
import { TutorService } from './tutor.service';
import { AuthGuard } from '../auth/auth.guard'
import { ValidatePipe } from '../validate/validate.pipe';
import { HttpBearerGuard } from '../authorisation/http-bearer.guard';

@Controller('tutors')
// @UseGuards(new AuthGuard())

  

export class TutorController{
   constructor(private tutorService: TutorService){}

   @Get()
   getBySubject(@Query('subject') subject: string) {
       return this.tutorService.getBySubject(subject)
   }

   @UseGuards(HttpBearerGuard)
   @Delete(':email')
   deleteByEmail(@Param('email') email: string) {
       return this.tutorService.deleteByEmail(email)
   }
   

   


   
}