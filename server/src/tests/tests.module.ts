import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";

import { TestEntity } from './tests.entity';
import { TestsService } from './tests.service';
import { TestsController } from './tests.controller';

@Module({
  imports: [TypeOrmModule.forFeature([TestEntity])],
  providers: [TestsService],
  exports: [TestsService],
  controllers: [TestsController],
})
export class TestsModules {}