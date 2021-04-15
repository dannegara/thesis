import {
  Entity,
  PrimaryGeneratedColumn,
  BaseEntity,
  OneToOne,
  JoinColumn,
  ManyToMany,
} from "typeorm";
import { UsersEntity } from '../users/users.entity';
import { CourseEntity } from '../courses/courses.entity';

@Entity({ name: 'students' })
export class StudentsEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToMany(() => CourseEntity, course => course.students)
  courses: CourseEntity[];
  
  @OneToOne(() => UsersEntity)
  @JoinColumn()
  user: UsersEntity;
}