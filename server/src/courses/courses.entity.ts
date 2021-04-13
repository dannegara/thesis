import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, BaseEntity } from "typeorm";
import { UsersEntity } from '../users/users.entity';

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

  @Column()
  status: Statuses

  @ManyToOne(() => UsersEntity, user => user.courses)
  author: UsersEntity

  @CreateDateColumn()
  created_at: Date

  @UpdateDateColumn()
  updated_at: Date
}