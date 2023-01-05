import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ProductPropertyService } from './product_property.service';
import { CreateProductPropertyDto } from './dto/create-product_property.dto';
import { UpdateProductPropertyDto } from './dto/update-product_property.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('商品属性接口')
@Controller('product-property')
export class ProductPropertyController {
  constructor(
    private readonly productPropertyService: ProductPropertyService,
  ) {}

  @Post()
  create(@Body() createProductPropertyDto: CreateProductPropertyDto) {
    return this.productPropertyService.create(createProductPropertyDto);
  }

  @Get()
  findAll() {
    return this.productPropertyService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productPropertyService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateProductPropertyDto: UpdateProductPropertyDto,
  ) {
    return this.productPropertyService.update(+id, updateProductPropertyDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productPropertyService.remove(+id);
  }
}
