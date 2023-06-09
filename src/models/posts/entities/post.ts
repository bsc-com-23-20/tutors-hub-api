import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import Tutor from '../../tutors/entities/tutor';
import Reviewer from '../../reviewers/entities/reviewer';

@Entity({ name: 'posts' })
class Post {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  content: string;

  @Column()
  subject: string;

  @Column()
  experience: string;

  @Column()
  modeOfDelivery: string;

  @Column()
  contactDetails: string;

  @Column()
  location: string;

  @Column('simple-array', { nullable: true })
  comments: string[];
  @Column({default: false})
  reviewed: boolean;

  @ManyToOne(() => Tutor, (tutor) => tutor.posts)
  @JoinColumn({ name: 'tutorId' })
  tutor: Tutor;

  @ManyToOne(() => Reviewer, (reviewer) => reviewer.posts)
  @JoinColumn({ name: 'reviewerId' })
  reviewer: Reviewer;
}

export default Post;
