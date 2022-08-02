import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: ['http://localhost:3333'],
    methods: '*',
    credentials: true,
  });
  
  await app.listen(parseInt(process.env.PORT) || 3000);
}
bootstrap();
