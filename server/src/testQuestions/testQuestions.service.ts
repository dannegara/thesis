import { Injectable } from "@nestjs/common";
import { TestQuestionEntity } from './testQuestions.entity';
import { TestEntity } from '../tests/tests.entity';

export interface TestQuestionDTO {
  question: string
}

@Injectable()
export class TestQuestionService {
  createQuestion(test: TestEntity, question: TestQuestionDTO) {
    const testQuestion = new TestQuestionEntity();

    testQuestion.question = question.question;
    testQuestion.test = test;

    return testQuestion.save()
  }

  attachQuestionsToTest(test: TestEntity, testQuestions: TestQuestionDTO[]) {
    return Promise.all(testQuestions.map((testQuestion => this.createQuestion(test, testQuestion))));
  }
}