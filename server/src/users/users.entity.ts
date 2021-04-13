import { Entity, PrimaryGeneratedColumn, Column, UpdateDateColumn, CreateDateColumn, OneToMany, BaseEntity } from "typeorm";
import { CourseEntity } from '../courses/courses.entity';

enum Roles {
  TEACHER = 'TEACHER',
  STUDENT = 'STUDENT'
}

@Entity({ name: 'users' })
export class UsersEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstname: string;

  @Column()
  lastname: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  role: Roles;

  @CreateDateColumn()
  created_at: Date

  @UpdateDateColumn()
  updated_at: Date

  @OneToMany(() => CourseEntity, course => course.author)
  courses: CourseEntity[]
}