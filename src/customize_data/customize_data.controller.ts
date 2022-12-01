import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CustomizeDataService } from './customize_data.service';
import { CreateCustomizeDatumDto } from './dto/create-customize_datum.dto';
import { UpdateCustomizeDatumDto } from './dto/update-customize_datum.dto';

@Controller('customize-data')
export class CustomizeDataController {
  constructor(private readonly customizeDataService: CustomizeDataService) {}

  @Post()
  create(@Body() createCustomizeDatumDto: CreateCustomizeDatumDto) {
    return this.customizeDataService.create(createCustomizeDatumDto);
  }

  @Get()
  findAll() {
    return this.customizeDataService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.customizeDataService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCustomizeDatumDto: UpdateCustomizeDatumDto) {
    return this.customizeDataService.update(+id, updateCustomizeDatumDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.customizeDataService.remove(+id);
  }
}
