// import Post from 'src/models/posts/entities/post';
// import Reviewer from 'src/models/reviewers/entities/reviewer';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import Post from '../../posts/entities/post';
// import { Post } from '@nestjs/common';
// import Post from '../../posts/entities/post';


@Entity({ name: 'tutors' })
class Tutor {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    name: 'first_name',
    type: 'varchar',
    nullable: false,
    length: 250,
  })
  first_name: string;

  @Column({
    name: 'last_name',
    type: 'varchar',
    nullable: false,
    length: 250,
  })
  last_name: string;

  @Column({
    name: 'user_name',
    type: 'varchar',
    nullable: false,
    unique: true,
    length: 250,
  })
  user_name: string;

  @Column({
    name: 'password',
    type: 'varchar',
    nullable: false,
    length: 256,
  })
  password: string;

  @Column({
    name: 'email',
    type: 'varchar',
    nullable: false,
    unique: true,
    length: 250,
  })
  email: string;

  @Column()
  imageUrl: string;

  @Column({default: "Tutor"})
  role: string;

  @OneToMany(() => Post, (post) => post.tutor)
  posts: Post[];
}
export default Tutor;
