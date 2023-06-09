import {
  IsEmail,
  IsNotEmpty,
  MinLength,
  IsOptional,
} from '@nestjs/class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreatePostDto {
  @ApiProperty({ example: 'Title' })
  @IsNotEmpty()
  title: string;

  @ApiProperty({ example: 'Content' })
  @IsNotEmpty()
  content: string;

  @ApiProperty({ example: 'Subject' })
  @IsNotEmpty()
  subject: string;

  @ApiProperty({ example: 'Experience' })
  @IsNotEmpty()
  experience: string;

  @ApiProperty({ example: 'Mode of Delivery' })
  @IsNotEmpty()
  modeOfDelivery: string;

  @ApiProperty({ example: 'Contact Details' })
  @IsNotEmpty()
  contactDetails: string;

  @ApiProperty({ example: 'Location' })
  @IsNotEmpty()
  location: string;
}

export class UpdatePostDto {
  @ApiProperty({ example: 'Updated Title' })
  @IsNotEmpty()
  @IsOptional()
  title?: string;

  @ApiProperty({ example: 'Updated Content' })
  @IsNotEmpty()
  @IsOptional()
  content?: string;

  @ApiProperty({ example: 'Updated Subject' })
  @IsNotEmpty()
  @IsOptional()
  subject?: string;

  @ApiProperty({ example: 'Updated Experience' })
  @IsNotEmpty()
  @IsOptional()
  experience?: string;

  @ApiProperty({ example: 'Updated Mode of Delivery' })
  @IsNotEmpty()
  @IsOptional()
  modeOfDelivery?: string;

  @ApiProperty({ example: 'Updated Contact Details' })
  @IsNotEmpty()
  @IsOptional()
  contactDetails?: string;

  @ApiProperty({ example: 'Updated Location' })
  @IsNotEmpty()
  @IsOptional()
  location?: string;
}
