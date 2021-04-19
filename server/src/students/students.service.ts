import { Injectable } from "@nestjs/common";
import * as randomString from 'randomstring';

import { StudentsEntity } from './students.entity';
import { UsersEntity, Roles } from '../users/users.entity';
import { MailService } from '../mail/mail.service';

@Injectable()
export class StudentsService {
  constructor(private mailService: MailService) { }

  public async createStudent(studentEmail: string): Promise<StudentsEntity> {
    const randomPassword = randomString.generate({
      length: 8,
      charset: 'alphabetic',
    });

    const user = new UsersEntity()

    user.email = studentEmail;
    user.password = randomPassword;
    user.role = Roles.STUDENT;

    const student = new StudentsEntity();

    student.user = user;

    await this.mailService.sendMail(student);

    await user.save();

    return student.save();
  }
}