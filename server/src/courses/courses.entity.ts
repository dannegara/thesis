import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  BaseEntity,
  OneToMany,
} from "typeorm";
import { UsersEntity } from '../users/users.entity';
import { LectureEntity } from '../lectures/lectures.entity';

enum Statuses {
  AVAILABLE = 'AVAILABLE'
}

@Entity({ name: 'courses' })
export class CourseEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column({ default: Statuses.AVAILABLE })
  status: Statuses

  @OneToMany(() => LectureEntity, lectures => lectures.course)
  lectures: LectureEntity[];

  @ManyToOne(() => UsersEntity, user => user.courses)
  author: UsersEntity

  @CreateDateColumn()
  createdAt: Date

  @UpdateDateColumn()
  updatedAt: Date
}