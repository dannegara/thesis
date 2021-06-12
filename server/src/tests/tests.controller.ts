import { Controller, Get, Param, Post, Body, Put, UseGuards, UnauthorizedException } from "@nestjs/common";
import { Crud, CrudController } from "@nestjsx/crud";
import { TestEntity } from './tests.entity';
import { TestsService } from './tests.service';
import { TestQuestionDTO } from '../testQuestions/testQuestions.service';
import { CourseEntity } from '../courses/courses.entity';
import { TestQuestionService } from '../testQuestions/testQuestions.service';
import { UsersEntity, Roles  } from '../users/users.entity';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { User } from '../users/users.decorator';
import { TeachersEntity } from "src/teachers/teachers.entity";
import { StudentsEntity } from "src/students/students.entity";

interface TestDTO {
  course: number;
  dateStart: Date;
  dateFinish: Date;
  name: string;
  questions: TestQuestionDTO[];
}

@Crud({ model: { type: TestEntity } })
@Controller("tests")
export class TestsController implements CrudController<TestEntity> {
  constructor(
    public service: TestsService,
    public testQuestionService: TestQuestionService
  ) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  async getAll(@User() user: UsersEntity) {
    console.log(user);
    if(user.role === Roles.TEACHER) {
      const teacher = await TeachersEntity.findOneOrFail(null, {
        where: {
          user
        }
      });
      const courses = await CourseEntity.find({ where: { teacher }, relations: ['tests'] });

      return courses.reduce((acc, course) => [...acc, ...course.tests], []);
    }

    if(user.role === Roles.STUDENT) {
      const student = await StudentsEntity.findOneOrFail(null, {
        where: {
          user
        },
        join: {
          alias: 'students',
          leftJoinAndSelect: {
            'courses': 'students.courses',
            'tests': 'courses.tests'
          }
        }
      });

      return student.courses.reduce((acc, course) => [...acc, ...course.tests], []);
    }

    throw new UnauthorizedException('Invalid role');
  }

  @Post()
  async create(@Body() body: TestDTO) {
    const course = await CourseEntity.findOneOrFail(body.course);
    const test = new TestEntity();
    
    test.name = body.name;
    test.dateStart = body.dateFinish;
    test.dateFinish = body.dateFinish;
    test.course = course;

    await test.save();

    await this.testQuestionService.attachQuestionsToTest(test, body.questions);

    return TestEntity.findOneOrFail(test.id, {
      relations: ['questions', 'course']
    });
  }

  @Put(':id')
  async updateOne(@Param('id') id: number, @Body() body: TestDTO) {
    const test = await TestEntity.findOneOrFail(id);

    const course = await CourseEntity.findOneOrFail(test.course);

    test.name = body.name;
    test.dateStart = body.dateFinish;
    test.dateFinish = body.dateFinish;
    test.course = course;

    test.questions = [];

    await test.save();

    await this.testQuestionService.attachQuestionsToTest(test, body.questions);

    return TestEntity.findOneOrFail(test.id, {
      relations: ['questions', 'course']
    });
  }

  @Get(':id')
  getOne(@Param('id') id: number) {
    return TestEntity.findOneOrFail(id, {
      relations: ['questions', 'course']
    });
  }
}