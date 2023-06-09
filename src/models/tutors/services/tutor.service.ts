import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import Tutor from '../entities/tutor';
import { CreateUserDto, UpdateUserDto } from '../dtos/tutor.dto';
import * as bcrypt from 'bcrypt';
import { PostService } from '../../posts/services/post.service';
//import { TutorModule }
@Injectable()
export class TutorService {
  constructor(
    @InjectRepository(Tutor)
    private readonly tutorRepo: Repository<Tutor>,
    private readonly postService: PostService,
  ) {}

  async createUser(user: CreateUserDto) {
    try {
      const userNameExist = await this.tutorRepo.findOneBy({
        user_name: user.user_name,
      });
      const emailExist = await this.tutorRepo.findOneBy({
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

      const newUser = this.tutorRepo.create({
        ...user,
        password: encryptedPassword,
      });
      await this.tutorRepo.save(newUser);
      return HttpStatus.CREATED, 'user created successfully';
    } catch (error) {
      console.log(error);
    }
  }

  async getUsers(): Promise<Tutor[]> {
    return this.tutorRepo.find({ relations: ['posts'] });
  }

  async getUserById(id: number) {
    const user = await this.tutorRepo.findOneBy({ id: id });
    if (!user) {
      throw new HttpException('user not found', HttpStatus.BAD_REQUEST);
    }
    return HttpStatus.OK, user;
  }

  async updateUserById(id: number, updateUserProps: UpdateUserDto) {
    try {
      const user = await this.tutorRepo.findOneBy({ id: id });
      if (!user) {
        throw new HttpException('user not found', HttpStatus.BAD_REQUEST);
      }
      const saltOrRounds = 10;
      const password = updateUserProps.password;
      const encryptedPassword: string = await bcrypt.hash(
        password,
        saltOrRounds,
      );
      await this.tutorRepo.update(
        { id: id },
        { ...updateUserProps, password: encryptedPassword },
      );
      return HttpStatus.OK, 'user updated successfully';
    } catch (error) {
      console.log(error);
    }
  }

  async deleteUserById(id: number) {
    const user = await this.tutorRepo.findOne({
      where: {
        id: id,
      },
      relations: {
        posts: true,
      },
    });
    if (!user) {
      throw new HttpException('user not found', HttpStatus.BAD_REQUEST);
    }
    await user.posts.map((post) => {
      this.postService.deletePost(post.id);
    });
    await this.tutorRepo.delete({ id: id });
    return HttpStatus.OK, 'user removed successfully';
  }
}
