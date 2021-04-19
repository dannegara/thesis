import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MailerModule } from '@nestjs-modules/mailer';
import { PugAdapter } from '@nestjs-modules/mailer/dist/adapters/pug.adapter';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { CoursesModule } from './courses/courses.module';
import { LecturesModule } from './lectures/lectures.module';
import { TestsModules } from './tests/tests.module';
import { StudentsModule } from './students/students.module';

@Module({
  imports: [
    UsersModule,
    AuthModule,
    CoursesModule,
    LecturesModule,
    TestsModules,
    StudentsModule,
    MailerModule.forRoot({
      transport: 'smtp://f84f47b37d1b23:a6eb889e554735@smtp.mailtrap.io',
      defaults: {
        from: '"nest-modules" <modules@nestjs.com>',
      },
      template: {
        dir: __dirname + '/templates',
        adapter: new PugAdapter({
          inlineCssEnabled: true,
          inlineCssOptions: { url: '' }
        }),
        options: {
          strict: true
        }
      }
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'zaq123EDC',
      database: 'thesis_db_2',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
