import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = process.env.PORT || 3001;

  // documenting swagger
  const config = new DocumentBuilder()
    .setTitle('TutorsHub API')
    .setDescription('Nestjs tutors Rest API ')
    .setVersion('1.0')
    .addTag('TutorsHub')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup("/" , app, document);

  // app listening at port 3001
  await app.listen(port);
}
bootstrap();
