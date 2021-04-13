import { Controller, Get } from "@nestjs/common";
import { Crud, CrudController } from "@nestjsx/crud";

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
}