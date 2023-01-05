import { PartialType } from '@nestjs/mapped-types';
import { CreateProductPropertyDto } from './create-product_property.dto';

export class UpdateProductPropertyDto extends PartialType(CreateProductPropertyDto) {}
