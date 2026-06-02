import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);

  app.useGlobalPipes(new ValidationPipe({ whitelist: true, transform: true }));

  app.enableCors({
    origin: [configService.get('web.url'), configService.get('admin.url')],
    credentials: true,
  });

  const apiPrefix = configService.get('api.prefix');
  const apiVersion = configService.get('api.version');
  app.setGlobalPrefix(`${apiPrefix}/${apiVersion}`);

  const swaggerConfig = new DocumentBuilder()
    .setTitle('BetTraction API')
    .setDescription('API documentation for BetTraction')
    .setVersion('1.0')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('api/docs', app, document);

  const port = configService.get('api.port');
  await app.listen(port);
  console.log(`Application is running on: http://localhost:${port}`);
}

bootstrap();
