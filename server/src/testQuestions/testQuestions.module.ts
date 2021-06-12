import { Module } from '@nestjs/common';
import { TestQuestionService } from './testQuestions.service';

@Module({
  providers: [TestQuestionService],
  exports: [TestQuestionService]
})
export class TestQuestionsModule {}