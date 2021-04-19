import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  UpdateDateColumn,
  CreateDateColumn,
  BaseEntity,
  OneToOne
} from "typeorm";
import { TeachersEntity } from '../teachers/teachers.entity';
import { StudentsEntity } from '../students/students.entity';

export enum Roles {
  TEACHER = 'TEACHER',
  STUDENT = 'STUDENT'
}

@Entity({ name: 'users' })
export class UsersEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ default: 'nofirstname' })
  firstname: string;

  @Column({ default: 'nolastname' })
  lastname: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  role: Roles;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @OneToOne(() => TeachersEntity)
  teacher: TeachersEntity;

  @OneToOne(() => StudentsEntity)
  student: StudentsEntity;
}