import { Controller, Get, Param } from "@nestjs/common";
import { Crud } from "@nestjsx/crud";

import { CourseEntity } from './courses.entity';
import { CoursesService } from './courses.service';

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
}