import {Controller, Post, Body } from '@nestjs/common'
import { AuthService } from './auth.service';
import { TutorDetails } from './dto/register-dto';
import { LoginData } from './dto/login-dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('auth')
@ApiTags('authentication')
export class AuthController{
   constructor(private authService: AuthService){}
   
   @Post('signin')
   signin(@Body() logindata: LoginData){
       return this.authService.signin(logindata)
   }

   @Post('signup')
   signup(@Body() tutorDetails: TutorDetails) {
    return this.authService.signup(tutorDetails)
    }

}