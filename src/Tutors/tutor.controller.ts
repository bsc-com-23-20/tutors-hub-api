import {Controller, Post, Body, Get, Query } from '@nestjs/common'
import { TutorService } from './tutor.service';
import { TutorDetails } from '../authentication/dto/register-dto';
import { LoginData } from '../authentication/dto/login-dto';

@Controller('tutor')
export class TutorController{
   constructor(private tutorService: TutorService){}

   @Get('tutors')
   getBySubject(@Query('subject') subject: string) {
       return this.tutorService.getBySubject(subject)
   }

   
}