import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  BaseEntity,
} from "typeorm";
import { CourseEntity } from '../courses/courses.entity';

@Entity({ name: 'lectures' })
export class LectureEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  fileUrl: string;

  @ManyToOne(() => CourseEntity, course => course.lectures)
  course: CourseEntity;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}