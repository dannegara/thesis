import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { TypeOrmCrudService } from "@nestjsx/crud-typeorm";

import { LectureEntity } from './lectures.entity';

@Injectable()
export class LecturesService extends TypeOrmCrudService<LectureEntity> {
  constructor(@InjectRepository(LectureEntity) repo) {
    super(repo);
  }
}