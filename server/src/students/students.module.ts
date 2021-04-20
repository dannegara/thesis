import { Module } from "@nestjs/common";

import { StudentsService } from './students.service';
import { MailModule } from '../mail/mail.module';
import { StudentsController } from './students.controller';

@Module({
  imports: [MailModule],
  providers: [StudentsService],
  exports: [StudentsService],
  controllers: [StudentsController]
})
export class StudentsModule {}