import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = process.env.PORT || 3000;

  // Create Swagger options
  const options = new DocumentBuilder()
    .setTitle('TutorsHub API')
    .setDescription('An API that has users as tutors, reviewers and users that search for information about tutors')
    .setVersion('1.0')
    .build();

  // Create Swagger document
  const document = SwaggerModule.createDocument(app, options);

  // Serve Swagger UI at /api/docs
  SwaggerModule.setup('/', app, document);

  await app.listen(port);
}
bootstrap();
