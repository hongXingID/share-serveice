import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SuccessInterceptor, ErrorInterceptor } from './shard/interceptors';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('/api/v1');
  app.useGlobalInterceptors(new SuccessInterceptor());
  app.useGlobalInterceptors(new ErrorInterceptor());
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
