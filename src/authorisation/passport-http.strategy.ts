import { PassportStrategy} from '@nestjs/passport'
import {Strategy} from 'passport-http-bearer'
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from '../authentication/auth.service';

@Injectable()
export class HttpBearerStrategy extends PassportStrategy(Strategy, 'bearer') {
    constructor(private authService: AuthService){
        super()
    }

    // async validate(token: string): Promise<{username: string, password: string}> {
    //     const user = await this.authService.validateUser(token);
    //     if (!user) {
    //       throw new UnauthorizedException();
    //     }
    //     return user;
    //   }
}



// import { PassportStrategy } from '@nestjs/passport';
// import { Strategy } from 'passport-http-bearer';
// import { Injectable, UnauthorizedException } from '@nestjs/common';
// import { AuthService } from '../authentication/auth.service';

// @Injectable()
// export class HttpBearerStrategy extends PassportStrategy(Strategy, 'bearer') {
//   constructor(private authService: AuthService) {
//     super();
//   }

//   async validate(token: string): Promise<{ username: string, password: string }> {
//     const user = await this.authService.validateUser(token);
//     if (!user) {
//       throw new UnauthorizedException();
//     }
//     return user;
//   }
// }
// In the updated code, the Strategy argument is provided to PassportStrategy() along with a string bearer to indicate the name of the authentication scheme. The validate() method now takes a single argument token instead of username and email, and it calls this.authService.validateUser() to validate the token.






