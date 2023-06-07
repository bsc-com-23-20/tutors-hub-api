import {ApiProperty} from "@nestjs/swagger"
export class LoginData {
    
    // username: string
    
    @ApiProperty({example:'mercy@gmail.com'})
    emailAddress: string
    
    @ApiProperty({example:'12rjh43'})
    password: string
}