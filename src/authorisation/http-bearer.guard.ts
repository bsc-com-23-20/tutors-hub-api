import {AuthGuard} from '@nestjs/passport'

export class HttpBearerGuard extends AuthGuard('bearer'){

}