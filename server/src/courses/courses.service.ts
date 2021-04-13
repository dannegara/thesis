import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { TypeOrmCrudService } from "@nestjsx/crud-typeorm";

import { CourseEntity } from './courses.entity';

@Injectable()
export class CoursesService extends TypeOrmCrudService<CourseEntity> {
  constructor(@InjectRepository(CourseEntity) repo) {
    super(repo);
  }
}