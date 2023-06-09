import { IsEmail, IsNotEmpty, MinLength, IsOptional } from '@nestjs/class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({ example: 'user@example.com', description: 'User email' })
  @IsEmail()
  email: string;

  @ApiProperty({ example: 'John', description: 'User first name' })
  @IsNotEmpty()
  first_name: string;

  @ApiProperty({ example: 'Doe', description: 'User last name' })
  @IsNotEmpty()
  last_name: string;

  @ApiProperty({ example: 'johndoe', description: 'User username' })
  @IsNotEmpty()
  user_name: string;

  @ApiProperty({ example: 'johndoe.png', description: 'User imageUrl' })
  imageUrl: string;

  @ApiProperty({ example: 'password', description: 'User password' })
  @IsNotEmpty()
  @MinLength(6)
  password: string;

  @ApiProperty({ example: 'user', description: 'User role' })
  role: string;
}

export class UpdateUserDto {
  @ApiProperty({
    example: 'updateduser@example.com',
    description: 'Updated user email',
  })
  @IsEmail()
  @IsOptional()
  email?: string;

  @ApiProperty({
    example: 'updatedpassword',
    description: 'Updated user password',
  })
  @IsNotEmpty()
  @MinLength(6)
  @IsOptional()
  password?: string;

  @ApiProperty({ example: 'John', description: 'Updated user first name' })
  @IsNotEmpty()
  @IsOptional()
  first_name?: string;

  @ApiProperty({ example: 'Doe', description: 'Updated user last name' })
  @IsNotEmpty()
  @IsOptional()
  last_name?: string;

  @ApiProperty({
    example: 'updatedusername',
    description: 'Updated user username',
  })
  @IsNotEmpty()
  @IsOptional()
  user_name?: string;
}
