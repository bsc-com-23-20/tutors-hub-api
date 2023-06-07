import { ApiProperty } from '@nestjs/swagger'

export class ReviewerDetails {

    @ApiProperty({example:'Firstname'})
    firstName: string

    @ApiProperty({example:'Lastname'})
    lastName: string

    @ApiProperty({example:'This a comment'})
    comment: string
    
    @ApiProperty({example: 1})
    tutorID:{ id: number
    }
    
}