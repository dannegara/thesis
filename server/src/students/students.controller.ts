import { Controller, Get } from "@nestjs/common";
import { StudentsEntity } from './students.entity';

@Controller("students")
export class StudentsController {
  @Get()
  async find() {
    return StudentsEntity.find({ relations: ['user'] });
  }
}