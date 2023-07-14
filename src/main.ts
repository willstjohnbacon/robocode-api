import { NestFactory } from '@nestjs/core';
import cookieParser from 'cookie-parser';
import { AppModule } from './app.module';
import helmet, { referrerPolicy } from 'helmet';

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
  await app.listen(8080);
}
bootstrap();
