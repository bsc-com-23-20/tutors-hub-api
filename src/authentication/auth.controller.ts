import {Controller, Post, Body, UseGuards, HttpCode, HttpStatus } from '@nestjs/common'
import { AuthService } from './auth.service';
import { TutorDetails } from './dto/register-dto';
import { LoginData } from './dto/login-dto';
import { ApiTags, ApiBody, ApiCreatedResponse, ApiUnprocessableEntityResponse, ApiForbiddenResponse, ApiBadRequestResponse, ApiOperation, ApiExtraModels } from '@nestjs/swagger';
import { Role } from './Roles/role.enum';
import { Roles } from './Roles/roles.decorator';



@Controller('tutor')
@ApiTags('A tutor')

  
  
export class AuthController{
   constructor(private authService: AuthService){}


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
   @ApiOperation({summary: 'creates a new tutor account, tutor has to post information', 
   description: 'post tutors information as shown below'})
   @ApiCreatedResponse({ description: 'Created Succesfully' })
    @ApiUnprocessableEntityResponse({ description: 'Bad Request' })
    @ApiForbiddenResponse({ description: 'Unauthorized Request' })
    @ApiBadRequestResponse({description: 'Bad Request'})
   @Roles(Role.Tutor)
   signup(@Body() tutorDetails: TutorDetails) {
    return this.authService.signup(tutorDetails)
    }


    
   @Post('signin')
   @ApiOperation({summary: 'checks for tutor account and signs them in if available',
    description: 'logs a tutor in if they provided the correct email and password'})
   @Roles(Role.Tutor)
   signin(@Body() logindata: LoginData){
       return this.authService.signin(logindata)
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