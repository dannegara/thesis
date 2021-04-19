import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { TypeOrmCrudService } from "@nestjsx/crud-typeorm";

import { CourseEntity } from './courses.entity';
import { StudentsEntity } from '../students/students.entity';
import { StudentsService } from '../students/students.service';

@Injectable()
export class CoursesService extends TypeOrmCrudService<CourseEntity> {
  constructor(
    @InjectRepository(CourseEntity) repo,
    private studentsService: StudentsService
  ) {
    super(repo);
  }

  public async inviteStudent(courseId: number, studentEmail: string) {
    const course = await CourseEntity.findOneOrFail(courseId)
    const student = await StudentsEntity.findOne({
      user: {
        email: studentEmail
      }
    })
    const foundStudent: StudentsEntity = student || await this.studentsService.createStudent(studentEmail);


    return this.envolveStudentToCourse(course, foundStudent);
  }

  private async envolveStudentToCourse(
    course: CourseEntity,
    student: StudentsEntity
  ): Promise<StudentsEntity> {
    student.courses = [course];

    return student.save();
  }
}