import {
  Controller,
  Get,
  Param,
  Post,
  Body
} from "@nestjs/common";
import { Crud } from "@nestjsx/crud";

import { CourseEntity } from './courses.entity';
import { CoursesService } from './courses.service';

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
    })
  }

  @Post(':id/student')
  async inviteStudent(
    @Param('id') id: number,
    @Body() inviteStudentDTO: InviteStudentDTO
  ): Promise<any> {
    return this.service.inviteStudent(id, inviteStudentDTO.studentEmail);
  }
}