import { ApiProperty } from '@nestjs/swagger'

export class ReviewerDetails {

    @ApiProperty()
    firstName: string

    @ApiProperty()
    lastName: string

    @ApiProperty()
    comment: string
    
    @ApiProperty()
    tutorID:{ id: number
    }
    
}