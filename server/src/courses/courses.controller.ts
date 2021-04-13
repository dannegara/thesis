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
  findOne(@Param('id') id: number) {
    return CourseEntity.findOneOrFail(id, { relations: ['lectures' ]});
  }
}