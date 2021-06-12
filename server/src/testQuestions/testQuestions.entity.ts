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
import { TestEntity } from '../tests/tests.entity';

@Entity({ name: 'testQuestions' })
export class TestQuestionEntity extends BaseEntity  {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  question: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @ManyToOne(() => TestEntity, test => test.questions)
  test: TestEntity;
}
