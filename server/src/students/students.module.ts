import { Module } from "@nestjs/common";

import { StudentsService } from './students.service';
import { MailModule } from '../mail/mail.module';

@Module({
  imports: [MailModule],
  providers: [StudentsService],
  exports: [StudentsService],
})
export class StudentsModule {}