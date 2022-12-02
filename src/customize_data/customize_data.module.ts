import { Module } from '@nestjs/common';
import { CustomizeDataService } from './customize_data.service';
import { CustomizeDataController } from './customize_data.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CustomizeData } from './entities/customize_data.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CustomizeData])],
  controllers: [CustomizeDataController],
  providers: [CustomizeDataService],
})
export class CustomizeDataModule {}
