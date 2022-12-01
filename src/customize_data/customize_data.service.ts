import { Injectable } from '@nestjs/common';
import { CreateCustomizeDatumDto } from './dto/create-customize_datum.dto';
import { UpdateCustomizeDatumDto } from './dto/update-customize_datum.dto';

@Injectable()
export class CustomizeDataService {
  create(createCustomizeDatumDto: CreateCustomizeDatumDto) {
    return 'This action adds a new customizeDatum';
  }

  findAll() {
    return `This action returns all customizeData`;
  }

  findOne(id: number) {
    return `This action returns a #${id} customizeDatum`;
  }

  update(id: number, updateCustomizeDatumDto: UpdateCustomizeDatumDto) {
    return `This action updates a #${id} customizeDatum`;
  }

  remove(id: number) {
    return `This action removes a #${id} customizeDatum`;
  }
}
