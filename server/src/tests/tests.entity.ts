import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  BaseEntity,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { CourseEntity } from '../courses/courses.entity';
import { TestQuestionEntity } from '../testQuestions/testQuestions.entity';

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

  @OneToMany(() => TestQuestionEntity, questions => questions.test)
  questions: TestQuestionEntity[]

  @CreateDateColumn()
  createdAt: Date

  @UpdateDateColumn()
  updatedAt: Date
}