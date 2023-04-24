import {Controller, Post, Body } from '@nestjs/common'
import { AuthService } from './auth.service';
import { TutorDetails } from './dto/register-dto';
import { LoginData } from './dto/login-dto';

@Controller('auth')
export class AuthController{
   constructor(private authService: AuthService){}
   
   @Post('signin')
   signup(@Body() logindata: LoginData){
       return this.authService.signin(logindata)
   }

   @Post('signup')
   signin(@Body() tutorDetails: TutorDetails) {
    return this.authService.signup(tutorDetails)
    }

}