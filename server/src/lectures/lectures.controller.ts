import { Controller, Get, Query } from "@nestjs/common";
import { Crud } from "@nestjsx/crud";

import { LectureEntity } from './lectures.entity';
import { LecturesService } from './lectures.service';

@Crud({
  model: {
    type: LectureEntity,
  },
})
@Controller("lectures")
export class LecturesController {
  constructor(public service: LecturesService) {}
}