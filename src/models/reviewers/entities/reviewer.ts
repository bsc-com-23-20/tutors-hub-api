// import Post from 'src/models/posts/entities/post';
// import Tutor from 'src/models/tutors/entities/tutor';
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import Post from '../../posts/entities/post';

@Entity({ name: 'reviewers' })
class Reviewer {
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

  @Column({default: "Reviewer"})
  role: string;

  @OneToMany(() => Post, (post) => post.reviewer)
  posts: Post[];
}
export default Reviewer;
