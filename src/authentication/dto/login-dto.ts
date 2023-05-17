import {ApiProperty} from "@nestjs/swagger"
export class LoginData {
    
    // username: string
    
    @ApiProperty()
    emailAddress: string
    
}