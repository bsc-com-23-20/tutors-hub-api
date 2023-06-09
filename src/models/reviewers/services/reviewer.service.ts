import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { compare, hash } from 'bcrypt';
import Reviewer from '../entities/reviewer';
import { CreateUserDto, UpdateUserDto } from '../dtos/reviewer.dto';
import * as bcrypt from 'bcrypt';
import { PostService } from '../../posts/services/post.service';
import Post from '../../posts/entities/post';

@Injectable()
export class ReviewerService {
  constructor(
    @InjectRepository(Reviewer)
    private readonly reviewerRepo: Repository<Reviewer>,
    // private readonly postService: PostService
  ) {}

  async createUser(user: CreateUserDto) {
    try {
      const userNameExist = await this.reviewerRepo.findOneBy({
        user_name: user.user_name,
      });
      const emailExist = await this.reviewerRepo.findOneBy({
        email: user.email,
      });
      if (userNameExist) {
        return 'username already taken';
      } else if (emailExist) {
        return 'email already taken';
      }

      const saltOrRounds = 10;
      const password = user.password;
      const encryptedPassword: string = await bcrypt.hash(
        password,
        saltOrRounds,
      );

      const newUser = this.reviewerRepo.create({
        ...user,
        password: encryptedPassword,
      });
      await this.reviewerRepo.save(newUser);
      return HttpStatus.CREATED, 'user created successfully';
    } catch (error) {
      console.log(error);
    }
  }

  async getUsers(): Promise<Reviewer[]> {
    return this.reviewerRepo.find();
  }

  async getUserById(id: number) {
    const user = await this.reviewerRepo.findOneBy({ id: id });
    if (!user) {
      throw new HttpException('user not found', HttpStatus.BAD_REQUEST);
    }
    return HttpStatus.OK, user;
  }

  async updateUserById(id: number, updateUserProps: UpdateUserDto) {
    try {
      const user = await this.reviewerRepo.findOneBy({ id: id });
      if (!user) {
        throw new HttpException('user not found', HttpStatus.BAD_REQUEST);
      }
      const saltOrRounds = 10;
      const password = updateUserProps.password;
      const encryptedPassword: string = await bcrypt.hash(
        password,
        saltOrRounds,
      );
      await this.reviewerRepo.update(
        { id: id },
        { ...updateUserProps, password: encryptedPassword },
      );
      return HttpStatus.OK, 'user updated successfully';
    } catch (error) {
      console.log(error);
    }
  }

  
  
}


