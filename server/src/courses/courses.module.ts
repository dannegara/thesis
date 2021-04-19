import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";

import { CourseEntity } from './courses.entity';
import { CoursesService } from './courses.service';
import { CoursesController } from './courses.controller';
import { StudentsModule } from '../students/students.module';

@Module({
  imports: [
    StudentsModule,
    TypeOrmModule.forFeature([CourseEntity])
  ],
  providers: [CoursesService],
  exports: [CoursesService],
  controllers: [CoursesController],
})
export class CoursesModule {}