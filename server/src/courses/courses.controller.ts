import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  UseGuards,
  UnauthorizedException,
} from "@nestjs/common";
import { Crud } from "@nestjsx/crud";

import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { CourseEntity } from './courses.entity';
import { CoursesService } from './courses.service';
import { User } from '../users/users.decorator';
import { UsersEntity, Roles  } from '../users/users.entity';
import { TeachersEntity } from '../teachers/teachers.entity';
import { StudentsEntity } from '../students/students.entity';

class InviteStudentDTO {
  studentEmail: string;
}

@Crud({
  model: {
    type: CourseEntity,
  },
})
@Controller("courses")
export class CoursesController {
  constructor(public service: CoursesService) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  async getAll(@User() user: UsersEntity) {
    if (user.role === Roles.TEACHER) {
      const teacher = await TeachersEntity.findOneOrFail(null, {
        where: {
          user
        }
      });
      return CourseEntity.find({ where: { teacher } });
    }

    if(user.role = Roles.STUDENT) {
      const student = await StudentsEntity.findOneOrFail(null, {
        where: {
          user
        },
        join: {
          alias: 'students',
          leftJoinAndSelect: {
            'courses': 'students.courses',
          }
        }
      });

      return student.courses;
    }

    throw new UnauthorizedException('Invalid ROLE');
  }

  @UseGuards(JwtAuthGuard)
  @Post()
  async post(@User() user: UsersEntity, @Body() body) {
    const teacher = await TeachersEntity.findOneOrFail(user.id);

    const course = new CourseEntity();

    course.name = body.name;
    course.description = body.description;
    course.teacher = teacher;

    return course.save();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<any> {
    return CourseEntity.findOneOrFail(id, {
      relations: ['lectures'],
      join: {
        alias: 'courses',
        leftJoinAndSelect: {
          'students': 'courses.students',
          'user': 'students.user'
        }
      }
    });
  }

  @Post(':id/student')
  async inviteStudent(
    @Param('id') id: number,
    @Body() inviteStudentDTO: InviteStudentDTO
  ): Promise<any> {
    return this.service.inviteStudent(id, inviteStudentDTO.studentEmail);
  }
}