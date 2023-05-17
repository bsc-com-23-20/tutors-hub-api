import { ApiProperty } from "@nestjs/swagger";

export class TutorDetails {

    @ApiProperty()
    firstName: string
    
    @ApiProperty()
    lastName: string
    
    @ApiProperty()
    emailAddress: string
    
    @ApiProperty()
    subject: string

    @ApiProperty()
    experience: string

    @ApiProperty()
    location: string
    
    @ApiProperty()
    imageUrl: string
    
    @ApiProperty()
    modeOfDelivery: string
    
    @ApiProperty()
    contactDetails: string
    
}