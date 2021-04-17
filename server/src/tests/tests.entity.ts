import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  BaseEntity,
  ManyToOne,
} from "typeorm";
import { CourseEntity } from '../courses/courses.entity';

@Entity({ name: 'tests' })
export class TestEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  dateStart: Date;

  @Column()
  dateFinish: Date;

  @ManyToOne(() => CourseEntity, course => course.tests)
  course: CourseEntity;

  @CreateDateColumn()
  createdAt: Date

  @UpdateDateColumn()
  updatedAt: Date
}