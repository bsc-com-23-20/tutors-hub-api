import {Controller, Post, Body, UseGuards, HttpCode, HttpStatus } from '@nestjs/common'
import { AuthService } from './auth.service';
import { TutorDetails } from './dto/register-dto';
import { LoginData } from './dto/login-dto';
import { ApiTags, ApiBody } from '@nestjs/swagger';
import { Role } from './Roles/role.enum';
import { Roles } from './Roles/roles.decorator';
// import { JwtService } from '@nestjs/jwt';

@Controller('auth')
@ApiTags('authentication')
export class AuthController{
   constructor(private authService: AuthService){}
    
   
   @Post('signin')
   @Roles(Role.Tutor)
   signin(@Body() logindata: LoginData){
       return this.authService.signin(logindata)
   }




//   @HttpCode(HttpStatus.OK)
//   @Post('login')
// @Roles(Role.Tutor)
//   signin(@Body() logindata: Record<string, any>) {
//     return this.authService.signin(logindata.);
//   }
// }

   @UseGuards()
   @ApiBody({type: TutorDetails})
   @Post('signup')
   @Roles(Role.Tutor)
   signup(@Body() tutorDetails: TutorDetails) {
    return this.authService.signup(tutorDetails)
    }

}




// @Controller('auth')
// export class AuthController {
//   constructor(private authService: AuthService) {}

//   @UseGuards(LocalAuthGuard)
//   @Post('login')
//   async login(@Request() req) {
//     return this.authService.login(req.user);
//   }
// }