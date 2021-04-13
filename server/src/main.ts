import { NestFactory } from '@nestjs/core';
import { Request, Response } from 'express';
import { AppModule } from './app.module';

function ResponseHeadersMiddleware(req: Request, res: Response, next: Function) {
  res.header('Access-Control-Expose-Headers', 'X-Total-Count');
  res.setHeader('X-Total-Count', 1000);
  next();
}

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });

  app.use(ResponseHeadersMiddleware);

  await app.listen(3000);
}
bootstrap();
