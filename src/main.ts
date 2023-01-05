import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import { AppModule } from './app.module';
import { Response } from './common/response';
import { HttpFilter } from './common/filter';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.setGlobalPrefix('/api');
  //配置图片静态资源访问目录
  app.useStaticAssets(join(__dirname, 'images'), {
    prefix: '/images',
  });
  //响应拦截器
  app.useGlobalInterceptors(new Response());
  //异常拦截器
  app.useGlobalFilters(new HttpFilter());

  //swagger接口文档
  const options = new DocumentBuilder()
    .setTitle('点餐小程序接口文档')
    .setDescription('接口文档')
    .setVersion('1')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('/api-docs', app, document);

  await app.listen(1728);
}
bootstrap();
