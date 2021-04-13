import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";

import { LectureEntity } from './lectures.entity';
import { LecturesService } from './lectures.service';
import { LecturesController } from './lectures.controller';

@Module({
  imports: [TypeOrmModule.forFeature([LectureEntity])],
  providers: [LecturesService],
  exports: [LecturesService],
  controllers: [LecturesController],
})
export class LecturesModule {}