import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoryModule } from './category/category.module';
import { UserModule } from './user/user.module';
import { ProductModule } from './product/product.module';
import { CustomizeDataModule } from './customize_data/customize_data.module';
import { OrderModule } from './order/order.module';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      username: 'root',
      password: '123456lhw,.',
      host: 'localhost',
      port: 3306,
      database: 'ordersys',
      // entities:[__dirname + '/**/*.entity{.ts,.js}'],//实体文件
      synchronize: true, //代表是否自动将实体类同步到数据库
      retryDelay: 500,
      retryAttempts: 10,
      autoLoadEntities: true, //是否自动加载实体forFeature()方法注册的每个实体都将自动添加到配置对象的实体
    }),
    CategoryModule,
    UserModule,
    ProductModule,
    CustomizeDataModule,
    OrderModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
