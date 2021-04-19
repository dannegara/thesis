import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';
import { StudentsEntity } from '../students/students.entity';

@Injectable()
export class MailService {
  constructor(private readonly mailerService: MailerService) {}

  public sendMail(student: StudentsEntity): Promise<any> {
    return this.mailerService.sendMail({
      to: student.user.email,
      from: 'noreply@myeducation.com',
      subject: 'You have been invited to join our platform',
      text: 'welcome',
      html: `
        <h1>Hi and Welcome. You have been invited to join our platform</h1>
        <h2>Here are your credentials:</h2>
        <p>Login: ${student.user.email}</p>
        <p>Password: ${student.user.password}</p>
      `,
    });
  }
}