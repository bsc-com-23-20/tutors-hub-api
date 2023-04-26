import {Controller, Delete, Get, Query, Param, Body } from '@nestjs/common'
import { TutorService } from './tutor.service';

@Controller('tutors')
export class TutorController{
   constructor(private tutorService: TutorService){}

   @Get()
   getBySubject(@Query('subject') subject: string) {
       return this.tutorService.getBySubject(subject)
   }
   @Delete(':email')
   deleteByEmail(@Param('email') email: string) {
       return this.tutorService.deleteByEmail(email)
   }

   


   
}