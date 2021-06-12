import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";

import { TestEntity } from './tests.entity';
import { TestsService } from './tests.service';
import { TestsController } from './tests.controller';

import { TestQuestionsModule } from '../testQuestions/testQuestions.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([TestEntity]),
    TestQuestionsModule
  ],
  providers: [TestsService],
  exports: [TestsService],
  controllers: [TestsController],
})
export class TestsModules {}