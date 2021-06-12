import { Controller, Get, Param, Post, Body, Put } from "@nestjs/common";
import { Crud, CrudController } from "@nestjsx/crud";
import { TestEntity } from './tests.entity';
import { TestsService } from './tests.service';
import { TestQuestionDTO } from '../testQuestions/testQuestions.service';
import { CourseEntity } from '../courses/courses.entity';
import { TestQuestionService } from '../testQuestions/testQuestions.service';

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