import { Controller } from "@nestjs/common";
import { Crud } from "@nestjsx/crud";
import { TestEntity } from './tests.entity';
import { TestsService } from './tests.service';

@Crud({ model: { type: TestEntity } })
@Controller("tests")
export class TestsController {
  constructor(public service: TestsService) {}
}