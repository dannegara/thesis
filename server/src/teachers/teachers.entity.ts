import {
  Entity,
  PrimaryGeneratedColumn,
  BaseEntity,
  OneToOne,
  JoinColumn,
  OneToMany,
} from "typeorm";
import { UsersEntity } from '../users/users.entity';
import { CourseEntity } from '../courses/courses.entity';

@Entity({ name: 'teachers' })
export class TeachersEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(() => UsersEntity)
  @JoinColumn()
  user: UsersEntity;

  @OneToMany(() => CourseEntity, course => course.teacher)
  courses: CourseEntity[];
}