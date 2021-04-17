import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { TypeOrmCrudService } from "@nestjsx/crud-typeorm";

import { TestEntity } from './tests.entity';

@Injectable()
export class TestsService extends TypeOrmCrudService<TestEntity> {
  constructor(@InjectRepository(TestEntity) repo) {
    super(repo);
  }
}