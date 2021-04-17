import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  BaseEntity,
  OneToMany,
  ManyToOne,
  ManyToMany,
  JoinColumn,
  JoinTable,
} from "typeorm";
import { LectureEntity } from '../lectures/lectures.entity';
import { TeachersEntity } from '../teachers/teachers.entity';
import { StudentsEntity } from '../students/students.entity';
import { TestEntity } from '../tests/tests.entity';

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

  @OneToMany(() => TestEntity, test => test.course)
  tests: TestEntity[];

  @ManyToOne(() => TeachersEntity, teacher => teacher.courses)
  teacher: TeachersEntity;

  @ManyToMany(() => StudentsEntity, student => student.courses)
  @JoinTable({ name: 'students_courses' })
  students: StudentsEntity[];

  @CreateDateColumn()
  createdAt: Date

  @UpdateDateColumn()
  updatedAt: Date
}