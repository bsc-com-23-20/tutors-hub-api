import {Controller, Post, Body, UseGuards, HttpCode, HttpStatus } from '@nestjs/common'
import { AuthService } from './auth.service';
import { TutorDetails } from './dto/register-dto';
import { LoginData } from './dto/login-dto';
import { ApiTags, ApiBody, ApiCreatedResponse, ApiUnprocessableEntityResponse, ApiForbiddenResponse, ApiBadRequestResponse, ApiOperation, ApiExtraModels, ApiResponse } from '@nestjs/swagger';
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
   @ApiResponse({status:201, description: 'The resource was created successfully' })
    @ApiResponse({status:500, description: 'Internal server error' })
    @ApiResponse({status:403, description: 'Not allowed access' })
    @ApiResponse({status:401, description: 'Unathourised' }) 
    @ApiResponse({status:400, description: 'Bad Request' })
    @ApiResponse({status:404, description: 'Not Found' })
   @Roles(Role.Tutor)
   signup(@Body() tutorDetails: TutorDetails) {
    return this.authService.signup(tutorDetails)
    }


    
   @Post('signin')
   @ApiOperation({summary: 'checks for tutor account and signs them in if available',
    description: 'logs a tutor in if they provided the correct email and password'})
    @ApiResponse({status:201, description: 'The resource was returned successfully' })
    @ApiResponse({status:500, description: 'Internal server error' })
    @ApiResponse({status:403, description: 'Not allowed access' })
    @ApiResponse({status:401, description: 'Unathourised' }) 
    @ApiResponse({status:400, description: 'Bad Request' })
    @ApiResponse({status:404, description: 'Not Found' })
   @Roles(Role.Tutor)
   signin(@Body() logindata: LoginData){
       return this.authService.signin(logindata)
   }

}


