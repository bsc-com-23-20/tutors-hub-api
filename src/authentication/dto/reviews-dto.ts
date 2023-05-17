import { ApiProperty } from '@nestjs/swagger'

export class ReviewerDetails {

    @ApiProperty()
    fistName: string

    @ApiProperty()
    lastName: string

    @ApiProperty()
    comment: string
    
    @ApiProperty()
    user: {
        id: number
    }
}