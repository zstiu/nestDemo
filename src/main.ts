import { NestFactory } from '@nestjs/core'
import { RootAppModule } from './rootApp.module'
import { ValidationPipe } from '@nestjs/common'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'

async function bootstrap(): Promise<void> {
  const app = await NestFactory.create(RootAppModule)
  app.useGlobalPipes(new ValidationPipe())

  const swaggerOption = new DocumentBuilder()
    .addBearerAuth()
    .setTitle('')
    .setDescription('fsg api')
    .setVersion('1.0')
    .build()
  const document = SwaggerModule.createDocument(app, swaggerOption)

  SwaggerModule.setup('api', app, document)

  await app.listen(3000)
}
bootstrap()
