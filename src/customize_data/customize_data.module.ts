import { Module } from '@nestjs/common';
import { CustomizeDataService } from './customize_data.service';
import { CustomizeDataController } from './customize_data.controller';

@Module({
  controllers: [CustomizeDataController],
  providers: [CustomizeDataService]
})
export class CustomizeDataModule {}
