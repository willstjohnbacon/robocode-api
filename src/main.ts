import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as express from 'express';
import helmet from 'helmet';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // app.use(
  //   helmet({
  //     contentSecurityPolicy: false,
  //     referrerPolicy: {
  //       policy: ['strict-origin-when-cross-origin'],
  //     },
  //   }),
  // );
  app.enableCors({ origin: true, credentials: true });
  await app.listen(parseInt(process.env.PORT) || 8080);
}
bootstrap();
