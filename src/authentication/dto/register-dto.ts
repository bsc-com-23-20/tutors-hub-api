import { ApiProperty } from "@nestjs/swagger";

export class TutorDetails {

    @ApiProperty({example: 'laston'})
    firstName: string
    
    @ApiProperty({example: 'nago'})
    lastName: string
    
    @ApiProperty({example: 'mercy@gmail.com'})
    emailAddress: string

    @ApiProperty({example: '102993dkk'})
    password: string

    @ApiProperty({example: 'english'})
    subject: string

    @ApiProperty({example: '2 years'})
    experience: string

    @ApiProperty({example: 'zomba'})
    location: string
    
    @ApiProperty({example: 'bh.png'})
    imageUrl: string
    
    @ApiProperty({example: 'online'})
    modeOfDelivery: string
    
    @ApiProperty({example: '09982375766'})
    contactDetails: string
    
}