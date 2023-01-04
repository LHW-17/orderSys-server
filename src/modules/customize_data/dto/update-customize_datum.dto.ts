import { PartialType } from '@nestjs/mapped-types';
import { CreateCustomizeDatumDto } from './create-customize_datum.dto';

export class UpdateCustomizeDatumDto extends PartialType(CreateCustomizeDatumDto) {}
